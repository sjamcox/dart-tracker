import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Header } from "./components/Header"
import Home from './pages/Home'
import FreeForAll from './modes/FreeForAll'


const App = () => {

  useEffect(() => {
    if (performance.navigation.type === 1) {
      window.location.href = '/';
    } 
  }, [])

  return (
    <div className="App">
      <Header>
        <h1>Dart Tracker</h1>
      </Header>
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
