import React from 'react'
import styled from 'styled-components'
import { color } from '../utils/colors'
import { motion } from 'framer-motion'

const MotionButton = styled(motion.button)`
background-color: #F5853F;
padding: 14px 28px;
color: white;
border-radius: 24px;
:disabled {
    background-color: grey;
}
`

export const Button = ({ children }) => (
    <MotionButton
        whileHover={{
            backgroundColor: color.flame,
        }}
    >
        {children}
    </MotionButton>
)

