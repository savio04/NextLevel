import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
    AdminSideBar,
    AdminContainer,
    AdminContent,
    AdminNav
} from './styles'
import { useState } from 'react'
import Tables from '../../components/Table'
import { IModule } from '../../components/Module'
import api from '../../services/api'
import { TableRow, TableCell } from '@material-ui/core'
import { FiEdit, FiTrash2,FiBook, FiLogOut, FiFolder} from 'react-icons/fi'
import ButtonNav from '../../components/ButtonNav'
import Button  from '../../components/Button'

interface IClassDTO{
    id: string,
    name: string
    mod_id: string,
    class_date: Date,
    created_at: Date,
    Module?: object
}

function AdminPage(){
    const AutheticateContext = useContext(AuthContext)
    const { LogOut,user } = AutheticateContext
    
    const [isCreateModule,setIsCreateModule] = useState(false)
    const [name, setName] = useState('')
    const [seeModules,setSeeModules] = useState(false)
    const [seeClasses,setSeeClasses] = useState(false)
    const [modules,setModules] = useState<IModule[]>(() => {
        api.get('/module')
        .then(response => setModules(response.data))
        return []
    })
    const [classes,setClasses] = useState<IClassDTO[]>(() => {
        api.get('/class')
        .then(response => setClasses(response.data))
        return []
    })

    //Buttons nav bar admin
    const handleSeeModule = () => {
        setSeeModules(true)
        setSeeClasses(false)
    }
    const handleSeeClass = () => {
        setSeeModules(false)
        setSeeClasses(true)
    }
    const handleCreateModule = async() => {
        const token = localStorage.getItem('@Plataform:token')
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
        const token = localStorage.getItem('@Plataform:token')
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


    return(
        <AdminContainer>
            <AdminSideBar>
                <header>
                    <h2>Ola {user.name}!</h2>
                    <p>Bem vindo ao painel admnistrativo</p>
                </header>
                <AdminNav>
                    <ul>
                        <li>
                            <ButtonNav isFocus = {seeModules} onClick = {handleSeeModule}>
                                <FiBook  size = {20}/>
                                Modulos
                            </ButtonNav>
                        </li>
                        <li>
                            <ButtonNav isFocus = {seeClasses} onClick = {handleSeeClass} >
                                <FiFolder  size = {20}/>
                                Aulas
                            </ButtonNav>
                        </li>
                        <li>
                            <ButtonNav onClick = {LogOut}>
                                <FiLogOut  size = {20}/>
                                Sair
                            </ButtonNav>
                        </li>
                    </ul>
                </AdminNav>
            </AdminSideBar>
            <AdminContent>
                {seeModules &&
                    (modules.length === 0 ?
                    <h2 style= {{color: 'black'}}>Nenhum modulo disponivel</h2>
                    :
                    <Tables>
                        {
                            modules.map(module => (
                                <TableRow key={module.id}>
                                    <TableCell style = {{color: '#312E38'}} align="center">{module.name}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">{module.numberOfClass}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">{module.created_at}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">
                                        <a href="#"><FiEdit size  = {20} /></a>
                                    </TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">
                                        <button onClick = {() => handleDeleteModule(module.id as string)}> <FiTrash2 size = {20} /> </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </Tables>)
                }

                {seeClasses &&
                    (classes.length === 0 ?
                        <h2 style = {{color: 'black'}}>Nenhuma Aula disponivel</h2>
                        :
                        <Tables>
                            {classes.map(classe => (
                                <TableRow key={classe.id}>
                                    <TableCell style = {{color: '#312E38'}} align="center">{classe.name}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">{classe.mod_id}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">{classe.class_date}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">
                                        <a href="#"><FiEdit size  = {20} /></a>
                                    </TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">
                                        <button onClick = {() => handleDeleteModule(module.id as string)}> <FiTrash2 size = {20} /> </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </Tables>
                    )
                }
            </AdminContent>
        </AdminContainer>
    )
}

export default AdminPage