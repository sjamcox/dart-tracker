import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Game from '../components/Game'
import Setup from '../components/Setup'
import Winner from '../components/Winner'

const FreeForAll = () => {   

    return (
        <div>
          <Switch>
            <Route exact path="/free-for-all">
              <Setup />
            </Route>
            <Route path="/free-for-all/game">
              <Game />
            </Route>
            <Route path="/free-for-all/winner">
              <Winner />
            </Route>
          </Switch>
        </div>
    )
}

export default FreeForAll