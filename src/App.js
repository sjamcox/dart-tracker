import React, { useEffect, useContext } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { Context } from './Context'
import { Header } from "./components/Header"
import Home from './pages/Home'
import FreeForAll from './modes/FreeForAll'
import { ForegroundContainer } from './components/ForegroundContainer'


const App = () => {

  const {gameReset} = useContext(Context)

  useEffect(() => {
    if (performance.navigation.type === 1) {
      window.location.href = '/';
    } 
  }, [])

  return (
    <div className="App">
      <Header>
        <Link to="/"><h1 onClick={gameReset}>Dart Tracker</h1></Link>
      </Header>
      <ForegroundContainer>
        <Switch>
          <Route exact path="/"><Home /></Route>
        </Switch>
        <Switch>
          <Route path="/free-for-all"><FreeForAll /></Route>
        </Switch>
      </ForegroundContainer>
    </div>
  )
}

export default App;
