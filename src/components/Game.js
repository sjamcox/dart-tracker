import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

const Game = () => {

    const { playerList, gameReset } = useContext(Context)
    return (
        <div>
        <div className="playerContainer">
            {playerList}
        </div>
        <Link to="/"><button onClick={(gameReset)}>Reset Game</button></Link>
        </div>
    )
}

export default Game