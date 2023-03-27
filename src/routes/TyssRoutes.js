import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const TyssRoutes = () => {
    let OurRoutes = useRoutes([
        {path : "/", element: <HomePage/>}
    ])
    return OurRoutes;
    
}

export default TyssRoutes
