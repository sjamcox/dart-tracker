import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Player from "./components/Player"
import LivesSelector from "./components/LivesSelector"
import PlayersSelector from './components/PlayersSelector';


const App = () => {

  const [ isDisabled, setIsDisabled ] = useState(true)
  
  // Game states
  const [ isPreSetup, setIsPreSetup] = useState(true)
  const [ isSetup, setIsSetup ] = useState(false)
  const [ isGameRunning, setIsGameRunning ] = useState(false)

  //Pre Setup
  const [ initialPlayers, setInitialPlayers ] = useState(2)
  const [ initialLives, setInitialLives ] = useState(5)
  
  //Player data
  const [ players, setPlayers ] = useState([])

  //Create players object
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

  function gameReset() {
    setIsGameRunning(false)
    initiateSetup()
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

  return (
    <div className="App">
      <Header />
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

export default App;
