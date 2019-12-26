import React, { useState } from 'react';
import './App.css';
import Player from "./components/Player"
import LivesSelector from "./components/LivesSelector"
import PlayersSelector from './components/PlayersSelector';


const App = () => {

  // Game states
  const [ isPreSetup, setIsPreSetup] = useState(true)
  const [ isSetup, setIsSetup ] = useState(false)
  const [ isGameRunning, setIsGameRunning ] = useState(false)

  //Pre Setup
  const [ initialPlayers, setInitialPlayers ] = useState(2)
  const [ initialLives, setInitialLives ] = useState(5)
  
  //Player data
  const [ players, setPlayers ] = useState([])


  function initiateSetup() {
    const newPlayers = [...players]
    for (let i = 0; i < initialPlayers; i++) {
      newPlayers.push({name: "", lives: initialLives})
    }
    setPlayers(newPlayers)
    setIsPreSetup(false)
    setIsSetup(true)
  }

  function gameStart() {
    setIsSetup(false)
    setIsGameRunning(true)
  }
  
  function decrement(index) {
    const newPlayers = [...players]
    newPlayers[index].lives = newPlayers[index].lives - 1
    setPlayers(newPlayers)
  }

  function handlePlayerChange(e, index) {
    const newPlayers = [...players]
    newPlayers[index].name = e.target.value
    setPlayers(newPlayers)
  }

  const playerList = players.map((player, index) => (
    <Player
      key={index}
      name={player.name}
      lives={player.lives}
      decrement={decrement}
      index={index}
      isGameRunning={isGameRunning}
    />
  ))

  const playerSetup = players.map((player, index) => (
    <div className="player">
      <h1>Player {index + 1}</h1>
      <input type="text" value={player.name} onChange={(e) => handlePlayerChange(e, index)}/>
    </div>
  ))

  console.log(players)

  return (
    <div className="App">
      <h1>Nerf Tracker</h1>
      {isPreSetup && (
        <div>
        <div className="controlsContainer">
          <PlayersSelector setInitialPlayers={setInitialPlayers}/>
          <LivesSelector setInitialLives={setInitialLives}/>
        </div>
        <button onClick={initiateSetup}>Enter Player Setup</button>
        </div>
      )}
      {isSetup && (
        <div>
          <div className="setupContainer">
            {playerSetup}
          </div>
          <button onClick={gameStart}>Start Game</button>
        </div>
      )}
      {isGameRunning && (
        <div>
          {playerList}
        </div>
      )}
    </div>
  )
}


export default App;
