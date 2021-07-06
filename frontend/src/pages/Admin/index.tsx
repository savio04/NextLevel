import React from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
    AdminContainer,
    AdminNavContainer,
    AdminNav,
    Image,
    AdminModuleContainer,
    AdminCreatemodule,
    AdminTableModules
} from './styles'
import { FiBox } from 'react-icons/fi'
import { useState } from 'react'
import Tables from '../../components/Table'
import { IModule } from '../../components/Module'
import api from '../../services/api'
import { TableRow, TableCell } from '@material-ui/core'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useEffect } from 'react'

function AdminPage(){
    const AutheticateContext = useContext(AuthContext)
    const { LogOut } = AutheticateContext
    
    const [isCreateModule,setIsCreateModule] = useState(false)
    const [name, setName] = useState('')
    const [token,setToken] = useState(() => localStorage.getItem('@Plataform:token'))
    const [modules,setModules] = useState<IModule[]>(() => {
        api.get('/module')
        .then(response => setModules(response.data))
        return []
    })

    function handleCreateModuleInput(){
        setIsCreateModule(!isCreateModule)
    }
    const handleCreateModule = async() => {
        await api.post(
            '/module',
            {name},
            {headers: 
                {Authorization: `Bearer ${token}`}
            }
        )
        const response = await api.get('/module')
        setModules(response.data)
        setName('')
        alert('Modulo criado com sucesso')
    }

    const handleDeleteModule = async (id:string) => {
        await api.delete(
            `/module/${id}`,
            {headers: 
                {Authorization: `Bearer ${token}`}
            }
        )
        const copyModules = modules
        const indexModule = copyModules.findIndex(module => module.id === id)
        if(indexModule >= 0){
            copyModules.splice(indexModule,1)
            setModules([...copyModules])
        }
    }

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
            <AdminModuleContainer>
                <AdminCreatemodule>
                    <h1>Modules</h1>
                    <hr style = {{color: '#FFF'}} />
                    {isCreateModule?
                        <div>
                            <input type="text" 
                                placeholder = 'nome'
                                value = {name}
                                onChange = {(event) => setName(event.target.value)}
                            />
                            <button onClick = {handleCreateModuleInput}>Cancelar</button>
                            <button onClick = {handleCreateModule}>Salvar</button>
                        </div>
                        :
                        <button onClick = {handleCreateModuleInput}>Cadastrar</button>
                    }
                </AdminCreatemodule>
                <AdminTableModules>
                    <Tables>
                        {modules.map(module => (
                            <TableRow key={module.id}>
                                <TableCell style = {{color: '#FFF'}} align="center">{module.name}</TableCell>
                                <TableCell style = {{color: '#FFF'}} align="center">{module.numberOfClass}</TableCell>
                                <TableCell style = {{color: '#FFF'}} align="center">{module.created_at}</TableCell>
                                <TableCell style = {{color: '#FFF'}} align="center">
                                    <a href="#"><FiEdit size  = {20} /></a>
                                </TableCell>
                                <TableCell style = {{color: '#FFF'}} align="center">
                                    <button onClick = {() => handleDeleteModule(module.id as string)}> <FiTrash2 size = {20} /> </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Tables>
                </AdminTableModules>
            </AdminModuleContainer>
        </AdminContainer>
    )
}

export default AdminPage