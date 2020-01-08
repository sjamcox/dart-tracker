import React from "react"
import styled from 'styled-components'

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  width: 250px;
  background-color: ${(props) => props.lives > 0 ? "lightsalmon" : "grey"};
`

const Player = ({name, lives, decrement, index}) => (
    <PlayerWrapper lives={lives}>
      <h1>{name}</h1>
      <h3>{lives}</h3>
      {lives > 0 && <button onClick={() => decrement(index)}>I died</button>}
    </PlayerWrapper>
)

export default Player