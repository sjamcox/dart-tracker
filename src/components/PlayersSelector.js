import React from "react"

const PlayersSelector = ({ setInitialPlayers }) => (
    <div className="control">
        <h2>How many players?</h2>
        <select onChange={(e) => setInitialPlayers(e.target.value)}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </div>
)


export default PlayersSelector