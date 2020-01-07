import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

const Game = () => {
    
    const { players, playerList, gameReset } = useContext(Context)

    useEffect(() => {
        const livingPlayers = players.filter(player => player.lives > 0)
        if (livingPlayers.length === 1) {
            console.log(`${livingPlayers[0].name} Wins!`)
        }
    }, [players])

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