import React, { useState } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

const App = () => {

  const [ playerCount, setPlayerCount ] = useState(2)
  const [ initialLives, setInitialLives ] = useState(3)
  const players = [
    {
      name: "Sam",
      lives: initialLives,
    },
    {
      name: "Tim",
      lives: initialLives,
    },
    {
      name: "Fred",
      lives: initialLives,
    }
  ]

  const listPlayers = players.map((player, index) =>
    <div className="playerContainer">
      <div className="player">
        <h4>Player {index + 1}</h4>
        <h2>{player.name}</h2>
        <h4>Lives Remaining: {player.lives}</h4>
      </div>
    </div>
  )
  
  const otherListPlayers = players.map((player, index) => 
    <PlayerCard key={index} id={index + 1} name={player.name} />
  )

  return (
    <div className="App">
      <h1>Nerf Tracker</h1>
      <h2>Deathmatch</h2>
      <div className="">
        <h4>How many lives?</h4>
        <select onChange={(e) => setInitialLives(e.target.value)}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
        </select>
      </div>
      <h4>How many players?</h4>
      <select onChange={(e) => setPlayerCount(e.target.value)}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p><button>Start</button></p>
      <div className="playerSection">{listPlayers}</div>
      <div className="playerSection">{otherListPlayers}</div>
    </div>
  )
}


export default App;
