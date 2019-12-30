import React, { useState, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Home from './pages/Home'
import Player from "./components/Player"
import LivesSelector from "./components/LivesSelector"
import PlayersSelector from './components/PlayersSelector'
import FreeForAll from './pages/FreeForAll'
import { Context } from './Context'


const App = () => {

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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
      <Switch>
        <Route path="/free-for-all"><FreeForAll /></Route>
      </Switch>
    </div>
  )
}

export default App;
