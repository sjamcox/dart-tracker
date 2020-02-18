import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import { Button } from '../components/Button'

export const Setup = () => {

    const {playerSetup, isDisabled} = useContext(Context)
    return (
        <div>
            <div className="setupContainer">
                {playerSetup}
            </div>
            <Link to="/free-for-all/game"><Button disabled={isDisabled}>Start Game</Button></Link>
        </div>
    )
}