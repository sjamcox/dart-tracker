import React, { useEffect, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Context } from '../context/Context'

const Game = () => {

    const { players, playerList, winner, setWinner, gameReset } = useContext(Context)

    useEffect(() => {
        const livingPlayers = players.filter(player => player.lives > 0)
        if (livingPlayers.length === 1) {
            setWinner(livingPlayers[0].name)
        }
    }, [players, setWinner])

    return (
        <div>
            <div className="playerContainer">{playerList}</div>
            <Link to="/"><button onClick={(gameReset)}>Reset Game</button></Link>
            {winner && <Redirect to="/free-for-all/winner" />}
        </div>
    )
}

export default Game