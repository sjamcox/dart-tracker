import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { color } from '../utils/colors'

const Home = () => {
    return (
        <div>
            <h1 style={{color: color.flame}}>Welcome to Dart Tracker</h1>
            <Link to="/free-for-all/pre-setup">
                <Button
                   whileHover={{
                       opacity: 0.9,
                   }} 
                >
                    Get Started
                </Button>
            </Link>
        </div>
    )
}

export default Home
