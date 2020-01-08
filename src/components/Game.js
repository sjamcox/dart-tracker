import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Game = () => {
    
    const [ winner, setWinner ] = useState("")
    const { players, playerList, gameReset } = useContext(Context)

    useEffect(() => {
        const livingPlayers = players.filter(player => player.lives > 0)
        if (livingPlayers.length === 1) {
            setWinner(livingPlayers[0].name)
        }
    }, [players])

    return (
        <div>
            {!winner ? <div className="playerContainer">{playerList}</div> : <h1>{winner} Wins!</h1>}
            <Link to="/"><button onClick={(gameReset)}>Reset Game</button></Link>
        </div>
    )
}

export default Game