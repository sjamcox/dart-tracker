import React, { useContext } from "react"
import { Context } from '../context/Context'

const PlayersSelector = ({ setInitialPlayers }) => {
    
    const {baseState} = useContext(Context)

    return (
        <div className="control">
            <h2>How many players?</h2>
            <select onChange={(e) => setInitialPlayers(e.target.value)}>
                <option value={baseState.players}>{baseState.players}</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    )
}


export default PlayersSelector