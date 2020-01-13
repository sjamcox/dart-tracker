import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Setup = () => {

    const {createPlayers, initialLives, setInitialLives, initialPlayers, setInitialPlayers, players, setPlayers, playerSetup, isDisabled} = useContext(Context)
    
    function incrementPlayers() {
        const newPlayers = [...players]
        if (initialPlayers < 6) {
            setInitialPlayers(prevState => prevState + 1)
            newPlayers.push({name: "", lives: initialLives})
            setPlayers(newPlayers)
        }
    }

    function decrementPlayers() {
        const newPlayers = [...players]
        if (initialPlayers > 2) {
            setInitialPlayers(prevState => prevState - 1)
            newPlayers.pop()
            setPlayers(newPlayers)
        }
    }
    
    function incrementLives() {
        setInitialLives(prevState => prevState + 1)
    }

    function decrementLives() {
        if (initialLives > 1)
        setInitialLives(prevState => prevState - 1)
    }

    useEffect(() => {
        createPlayers()
    }, [])

    return (
        <div>
            <h1>Free For All</h1>
            <h3>Game Setup</h3>
            <ControlsWrapper>
                <NumberSelector
                    title="How Many Players?"
                    value={initialPlayers}
                    onChange={(e) => setInitialPlayers(e.target.value)}
                    increment={incrementPlayers}
                    decrement={decrementPlayers}
                />
                <NumberSelector
                    title="How Many Lives?"
                    value={initialLives}
                    onChange={(e) => setInitialLives(e.target.value)}
                    increment={incrementLives}
                    decrement={decrementLives}
                />
            </ControlsWrapper>
            <div className="setupContainer">
                {playerSetup}
            </div>
            <Link to="/free-for-all/game"><button disabled={isDisabled}>Start Game</button></Link>
        </div>
    )
}

export default Setup

