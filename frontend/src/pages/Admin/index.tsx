import React from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { AuthContext } from '../../context/AuthContext'

function AdminPage(){
    const AutheticateContext = useContext(AuthContext)
    const { LogOut } = AutheticateContext
    const handleLogOut = useCallback(() => {
        LogOut()
    },[LogOut])
    return(
        <div>
            <h2>Admin Page</h2>
            <button onClick = {handleLogOut}>logout</button>
        </div>
    )
}

export default AdminPage