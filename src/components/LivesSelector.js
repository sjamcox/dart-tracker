import React from "react"

const LivesSelector = ({ setInitialLives }) => (
    <div className="control">
        <h2>How many lives?</h2>
        <select onChange={(e) => setInitialLives(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
    </div>
)


export default LivesSelector