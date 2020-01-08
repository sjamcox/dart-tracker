import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Winner = () => {

    const { winner, gameReset } = useContext(Context)

    return (
        <div>
            <h1>{winner} Wins!</h1>
            <Link to="/"><button onClick={(gameReset)}>Reset Game</button></Link>
        </div>
    )
}

export default Winner