import React, { useContext } from "react"
import { Context } from '../Context'

const LivesSelector = ({ setInitialLives }) => {
    
    const { baseState } = useContext(Context)
    
    return (
        <div className="control">
            <h2>How many lives?</h2>
            <select onChange={(e) => setInitialLives(e.target.value)}>
                <option value={baseState.lives}>{baseState.lives}</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>
    )
}


export default LivesSelector