import React from "react"
import styled from 'styled-components'
import { Input } from "./Input"

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const NumberSelector = ({ onChange, title }) => {
    return (
        <ControlWrapper>
            <h2>{title}</h2>
            <button onClick={decrement}>-</button>
            <Input type="text" onChange={onChange} />
            <button onClick={increment}>+</button>
        </ControlWrapper>
    )
}

export default NumberSelector