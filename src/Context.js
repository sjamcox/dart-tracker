import React, { useState } from 'react'
import Player from './components/Player'
const Context = React.createContext(null)

const ContextProvider = ({ children }) => {

    const baseState = {players: 2, lives: 5}
  
    const [ isDisabled, setIsDisabled ] = useState(true)
    const [ initialPlayers, setInitialPlayers ] = useState(baseState.players)
    const [ initialLives, setInitialLives ] = useState(baseState.lives)
    const [ players, setPlayers ] = useState([])

    function createPlayers() {
        const newPlayers = [...players]
        for (let i = 0; i < initialPlayers; i++) {
          newPlayers.push({name: "", lives: initialLives})
        }
        setPlayers(newPlayers)
    }
    
    function gameReset() {
        setInitialPlayers(baseState.players)
        setInitialLives(baseState.lives)
        setPlayers([])
        setIsDisabled(true)
    }

    function decrement(index) {
        const newPlayers = [...players]
        newPlayers[index].lives = newPlayers[index].lives - 1
        setPlayers(newPlayers)
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

    function handlePlayerChange(e, index) {
        const newPlayers = [...players]
        newPlayers[index].name = e.target.value
        setPlayers(newPlayers)
        validateName(players)
    }

    const playerList = players.map((player, index) => (
        <div className="player">
          <Player
              key={index}
              name={player.name}
              lives={player.lives}
              decrement={decrement}
              index={index}
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
    
    return (
        <Context.Provider value={{
            baseState,
            players,
            setPlayers,
            playerList,
            playerSetup,
            isDisabled,
            setIsDisabled,
            initialPlayers,
            setInitialPlayers,
            initialLives,
            setInitialLives,
            createPlayers,
            gameReset,
            decrement,
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}