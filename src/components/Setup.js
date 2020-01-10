import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Setup = () => {

    const {initialLives, setInitialLives, initialPlayers, setInitialPlayers, createPlayers, playerSetup, isDisabled} = useContext(Context)
    return (
        <div>
            <ControlsWrapper>
                <NumberSelector
                    title="How Many Players?"
                    value={initialPlayers}
                    onChange={(e) => setInitialPlayers(e.target.value)}
                />
                <NumberSelector
                    title="How Many Lives?"
                    value={initialLives}
                    onChange={(e) => setInitialLives(e.target.value)}
                />
            </ControlsWrapper>
            <button onClick={createPlayers}>Create Players</button>
            <div className="setupContainer">
                {playerSetup}
            </div>
            <Link to="/free-for-all/game"><button disabled={isDisabled}>Start Game</button></Link>
        </div>
    )
}

export default Setup

