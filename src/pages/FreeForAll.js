import React, { useContext } from 'react'
import { Context } from '../Context'
import Player from '../components/Player'
import PlayersSelector from '../components/PlayersSelector'
import LivesSelector from '../components/LivesSelector'

const FreeForAll = () => {

    const {
        players,
        setPlayers,
        isDisabled,
        setIsDisabled,
        initialPlayers,
        setInitialPlayers,
        initialLives,
        setInitialLives,
        isPreSetup,
        setIsPreSetup,
        isSetup,
        setIsSetup,
        isGameRunning,
        setIsGameRunning,
        initiateSetup,
        gameStart,
        gameReset,
        } = useContext(Context)

        const playerList = players.map((player, index) => (
            <div className="player">
              <Player
                  key={index}
                  name={player.name}
                  lives={player.lives}
                  decrement={decrement}
                  index={index}
                  isGameRunning={isGameRunning}
                />  
            </div>
          ))
        
          const playerSetup = players.map((player, index) => (
            <div className="player" key={index}>
              <h1>Player {index + 1}</h1>
              <input
                type="text"
                value={player.name}
                onChange={(e) => handlePlayerChange(e, index)}/>
            </div>
          ))

          function decrement(index) {
            const newPlayers = [...players]
            newPlayers[index].lives = newPlayers[index].lives - 1
            setPlayers(newPlayers)
          }
        
          function handlePlayerChange(e, index) {
            const newPlayers = [...players]
            newPlayers[index].name = e.target.value
            setPlayers(newPlayers)
            validateName(players)
          }
        
          function validateName(arr) {
            let count = 0
            for (let i = 0; i < initialPlayers; i++)
              if (arr[i].name === "") {
              count = count + 1
            }
            if (count > 0) {
              setIsDisabled(true)
            } else {
              setIsDisabled(false)
            }
          }

    return (
        <div>
            {isPreSetup && (
        <div>
        <div className="controlsContainer">
          <PlayersSelector setInitialPlayers={setInitialPlayers}/>
          <LivesSelector setInitialLives={setInitialLives}/>
        </div>
        <button onClick={initiateSetup}>Next >></button>
        </div>
      )}
      {isSetup && (
        <div>
          <div className="setupContainer">
            {playerSetup}
          </div>
          <button onClick={gameStart} disabled={isDisabled}>Start Game</button>
        </div>
      )}
      {isGameRunning && (
        <div>
          <div className="playerContainer">
            {playerList}
          </div>
          <button onClick={(gameReset)}>Reset Game</button>
        </div>
      )}
        </div>
    )
}

export default FreeForAll