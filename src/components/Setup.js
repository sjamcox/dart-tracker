import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const PreSetup = () => {

    const {setInitialLives, setInitialPlayers, createPlayers, playerSetup, isDisabled} = useContext(Context)
    return (
        <div>
            <ControlsWrapper>
                <NumberSelector
                    title="How Many Players?"
                    onChange={(e) => setInitialPlayers(e.target.value)}
                />
                <NumberSelector
                    title="How Many Lives?"
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

export default PreSetup

