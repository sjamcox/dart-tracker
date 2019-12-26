import React from "react"

const Player = ({name, lives, decrement, index, isGameRunning}) => (
    <div>
      <h1>{name}</h1>
      {lives > 0 && <h3>{lives}</h3>}
      {isGameRunning && lives > 0 && <button onClick={() => decrement(index)}>I died</button>}
      {lives === 0 && <h2 style={{color: "red"}}>YOU LOSE X.X</h2>}
    </div>
)

export default Player