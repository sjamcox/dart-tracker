import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

import PlayersSelector from '../components/PlayersSelector'
import LivesSelector from '../components/LivesSelector'

const PreSetup = () => {

    const {setInitialLives, setInitialPlayers, initiateSetup} = useContext(Context)
    return (
        <div>
            <div className="controlsContainer">
                <PlayersSelector setInitialPlayers={setInitialPlayers}/>
                <LivesSelector setInitialLives={setInitialLives}/>
            </div>
            <Link to="/free-for-all/setup"><button onClick={initiateSetup}>Next >></button></Link>
        </div>
    )
}

export default PreSetup