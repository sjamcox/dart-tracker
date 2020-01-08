import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

import PlayersSelector from '../components/PlayersSelector'
import LivesSelector from '../components/LivesSelector'

const PreSetup = () => {

    const {setInitialLives, setInitialPlayers, createPlayers} = useContext(Context)
    return (
        <div>
            <div className="controlsContainer">
                <PlayersSelector setInitialPlayers={setInitialPlayers}/>
                <LivesSelector setInitialLives={setInitialLives}/>
            </div>
            <Link to="/free-for-all/setup"><button onClick={createPlayers}>Next >></button></Link>
        </div>
    )
}

export default PreSetup