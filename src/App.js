import React, { useState } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

const App = () => {

  const [ playerCount, setPlayerCount ] = useState(2)
  const [ initialLives, setInitialLives ] = useState(3)
  const [ playerData, setPlayerData ] = useState([
    {
      name: "Sam",
      lives: initialLives,
    },
    {
      name: "Johan",
      lives: initialLives,
    },
    {
      name: "Niki",
      lives: initialLives,
    },
    {
      name: "Dani",
      lives: initialLives,
    }
  ])

  const listPlayers = playerData.map((player, index) =>
    <div className="playerContainer">
      <div className="player">
        <h4>Player {index + 1}</h4>
        <h2>{player.name}</h2>
        <h4>Lives Remaining: {player.lives}</h4>
      </div>
    </div>
  )
  
  const otherListPlayers = playerData.map((player, index) => 
    <PlayerCard key={index} id={index + 1} name={player.name} />
  )

  return (
    <div className="App">
      <h1>Nerf Tracker</h1>
      <h2>Deathmatch</h2>
      <form>
        <div className="controlsContainer">
          <div className="control">
            <h4>How many lives?</h4>
            <select onChange={(e) => setInitialLives(e.target.value)}>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="control">
            <h4>How many players?</h4>
            <select onChange={(e) => setPlayerCount(e.target.value)}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <p>Player 1 Name: <input type="text" value={playerData[0].name}></input></p>
        <p>Player 2 Name: <input type="text" value={playerData[1].name}></input></p>
        {playerCount >= 3 && <p>Player 3 Name: <input type="text" value={playerData[2].name}></input></p>}
        {playerCount >= 4 && <p>Player 4 Name: <input type="text" value={playerData[3].name}></input></p>}
        <p><button type="submit">Let's Go</button></p>
      </form>
    </div>
  )
}


export default App;
