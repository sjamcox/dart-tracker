import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Nerf Tracker</h1>
            <Link to="/free-for-all"><button>Get Started</button></Link>
        </div>
    )
}

export default Home
