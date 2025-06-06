import React from 'react'
import { Navigate } from 'react-router-dom'


function RutasProtegidas({ children, isAuthenticated }) {
    
    if (!isAuthenticated) {
        return <Navigate to="/Login" replace />
    }

    return children
}

export default RutasProtegidas
