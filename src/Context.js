import React, { useState } from 'react'
const Context = React.createContext(null)

const ContextProvider = ({ children }) => {

    const [ isDisabled, setIsDisabled ] = useState(true)

    // Game states
    const [ isPreSetup, setIsPreSetup] = useState(true)
    const [ isSetup, setIsSetup ] = useState(false)
    const [ isGameRunning, setIsGameRunning ] = useState(false)

    //Pre Setup
    const [ initialPlayers, setInitialPlayers ] = useState(2)
    const [ initialLives, setInitialLives ] = useState(5)
    
    //Player data
    const [ players, setPlayers ] = useState([])

    //Create players object
    function initiateSetup() {
        const newPlayers = [...players]
        for (let i = 0; i < initialPlayers; i++) {
          newPlayers.push({name: "", lives: initialLives})
        }
        setPlayers(newPlayers)
        setIsPreSetup(false)
        setIsSetup(true)
      }
    
    function gameStart() {
        setIsSetup(false)
        setIsGameRunning(true)
    }
    
    function gameReset() {
        setIsGameRunning(false)
        initiateSetup()
    }
    
    return (
        <Context.Provider value={{
            players,
            setPlayers,
            isDisabled,
            setIsDisabled,
            initialPlayers,
            setInitialPlayers,
            initialLives,
            setInitialLives,
            isPreSetup,
            setIsPreSetup,
            isSetup,
            setIsSetup,
            isGameRunning,
            setIsGameRunning,
            initiateSetup,
            gameStart,
            gameReset,
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}