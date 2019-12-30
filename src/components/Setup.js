import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

const Setup = () => {

    const {playerSetup, isDisabled} = useContext(Context)
    return (
        <div>
            <div className="setupContainer">
                {playerSetup}
            </div>
            <Link to="/free-for-all/game"><button disabled={isDisabled}>Start Game</button></Link>
        </div>
    )
}

export default Setup