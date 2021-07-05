import React from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { AdminContainer,AdminNavContainer,AdminNav,Image} from './styles'
import { FiBox } from 'react-icons/fi'

function AdminPage(){
    const AutheticateContext = useContext(AuthContext)
    const { LogOut } = AutheticateContext
    const handleLogOut = useCallback(() => {
        LogOut()
    },[LogOut])
    return(
        <AdminContainer>
            <AdminNavContainer>
                <AdminNav>
                    <Image>
                        <FiBox size = {20}  />
                        <p>NextLevel</p>
                    </Image>
                        
                    <button onClick = {handleLogOut}>Sair</button>
                </AdminNav>
            </AdminNavContainer>
        </AdminContainer>
    )
}

export default AdminPage