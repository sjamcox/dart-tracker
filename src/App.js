import React, { useState } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

const App = () => {

  const [ playerCount, setPlayerCount ] = useState(2)
  const [ initialLives, setInitialLives ] = useState(3)
  const players = [
    {
      name: "Sam",
      lives: 28,
    },
    {
      name: "Tim",
      lives: 28,
    },
    {
      name: "Fred",
      lives: 28,
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
    <PlayerCard key={index} name={player.name} />
  )

  return (
    <div className="App">
      <h1>Nerf Tracker</h1>
      <h2>Deathmatch</h2>
  <h4>How many lives? {initialLives}</h4>
      <select onChange={(e) => setInitialLives(e.target.value)}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
      </select>
      <h4>How many players? {playerCount}</h4>
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
