import React from "react"
import styled from 'styled-components'
import { Input } from "./Input"

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    button {
        background-color: grey;
        border-radius: 5%
    }
    input {
        width: 40px;
    }
`

const NumberSelector = ({ onChange, increment, decrement, title, value }) => {

    return (
        <ControlWrapper>
            <h3>{title}</h3>
            <div>
                <button onClick={decrement}>-</button>
                <Input type="text" onChange={onChange} value={value} />
                <button onClick={increment}>+</button>
            </div>
        </ControlWrapper>
    )
}

export default NumberSelector