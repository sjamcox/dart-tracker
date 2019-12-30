import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Game from '../components/Game'
import Setup from '../components/Setup'
import PreSetup from '../components/PreSetup'

const FreeForAll = () => {   

    return (
        <div>
          <Switch>
            <Route path="/free-for-all/pre-setup">
              <PreSetup />
            </Route>
            <Route path="/free-for-all/setup">
              <Setup />
            </Route>
            <Route path="/free-for-all/game">
              <Game />
            </Route>
          </Switch>
        </div>
    )
}

export default FreeForAll