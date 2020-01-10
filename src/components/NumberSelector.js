import React from "react"
import styled from 'styled-components'
import { Input } from "./Input"

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
`


const NumberSelector = ({ onChange, title, value }) => {

    return (
        <ControlWrapper>
            <h2>{title}</h2>
            <button>-</button>
            <Input type="text" onChange={onChange} value={value} />
            <button>+</button>
        </ControlWrapper>
    )
}

export default NumberSelector