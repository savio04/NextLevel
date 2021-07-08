import React  from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
    AdminSideBar,
    AdminContainer,
    AdminContent,
    AdminNav,
    AdminCreateModuleFiled,
    AdminCreateModuleEnableButton,
    AdminCreateModuleSend
} from './styles'
import { useState } from 'react'
import Tables from '../../components/Table'
import { IModule } from '../../components/Module'
import api from '../../services/api'
import { TableRow, TableCell,Table, TableHead,TableBody } from '@material-ui/core'
import { FiEdit, FiTrash2,FiBook, FiLogOut, FiFolder} from 'react-icons/fi'
import ButtonNav from '../../components/ButtonNav'
import ModalClass from '../../components/ModalClass'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import { Button } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ModalModule from '../../components/ModalModule'

interface IClassDTO{
    id: string,
    name: string
    mod_id: string,
    class_date: Date,
    created_at: Date,
    module: string
}
interface IObjectClassModal {
    id:string
    name:string
}

function AdminPage(){
    const AutheticateContext = useContext(AuthContext)
    const { LogOut,user } = AutheticateContext

    const [moduleClassCreate,setModuleClassCreate] = useState('')
    const [nameClassCreate,setNameClassCreate] = useState('')
    const [class_dateCreate,setClassDateCreate] = useState('')
    const [nameModuleCreate, setNameModuleCreate] = useState('')
    const [seeModules,setSeeModules] = useState(true)
    const [seeClasses,setSeeClasses] = useState(false)
    const [viewModal,setViewModal] = useState(false)
    const [viewModalModule,setViewModalModule] = useState(false)
    const [enableInputs,setEnableInputs] = useState(true)
    const [ObjectClassModal,setObjectClassModal] = useState<IObjectClassModal>({} as IObjectClassModal)
    const [ObjectModuleModal,setObjectModuleModal] = useState<IObjectClassModal>({} as IObjectClassModal)
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

    
    const handleOpenModalClass = (id:string,name:string) => {
        setObjectClassModal({
            id,
            name
        })
        setViewModal(true)
    };

    const dateFormat = (data:Date) => {
        const dia  = data.getDate().toString()
        const diaF = (dia.length === 1) ? '0'+dia : dia
        const mes  = (data.getMonth()+1).toString() //+1 pois no getMonth Janeiro começa com zero.
        const mesF = (mes.length === 1) ? '0'+mes : mes
        const anoF = data.getFullYear();
        const hours = data.getHours().toString()
        const minutes = data.getMinutes().toString()
        const minutesF = (minutes.length ===1 ? '0' + minutes: minutes)
        return `${diaF}/${mesF}/${anoF} às ${hours}:${minutesF}`
    }

    const handleOpenModalModule = (id:string,name:string) => {
        setObjectModuleModal({
            id,
            name
        })
        setViewModalModule(true)
    };
    
    const handleClose = () => {
        setViewModal(false);
    };

    const handleCloseModalModule = () => {
        setViewModalModule(false);
    };

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
            {name: nameModuleCreate},
            {headers: 
                {Authorization: `Bearer ${token}`}
            }
        )
        const response = await api.get('/module')
        setModules(response.data)
        alert('Modulo criado com sucesso')
        setNameModuleCreate('')
    }

    const handleCreateClass = async() => {
        const token = localStorage.getItem('@Plataform:token')
        await api.post(
            '/class',
            {
                name: nameClassCreate,
                class_date: class_dateCreate,
                module: moduleClassCreate
            },
            {headers: 
                {Authorization: `Bearer ${token}`}
            }
        )
        const response = await api.get('/class')
        setClasses(response.data)
        alert('Aula criada com sucesso')
        setNameClassCreate('')
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
    const handleDeleteClass = async (id:string) => {
        const token = localStorage.getItem('@Plataform:token')
        await api.delete(
            `/class/${id}`,
            {headers: 
                {Authorization: `Bearer ${token}`}
            }
        )
        const copyClass = classes
        const indexModule = copyClass.findIndex(classe => classe.id === id)
        if(indexModule >= 0){
            copyClass.splice(indexModule,1)
            setClasses([...copyClass])
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
                {
                    viewModalModule && <ModalModule 
                    idModule = {ObjectModuleModal.id}
                    nameModule = {ObjectModuleModal.name}
                    isOpen = {viewModalModule}
                    handleClose = {handleCloseModalModule}
                    />
                }
                {
                   seeModules &&  
                   <AdminCreateModuleFiled>
                        <h2>Modulos</h2>
                        <hr />
                        <AdminCreateModuleEnableButton>
                            <p>Cadastrar</p>
                            <Switch
                                checked={!enableInputs}
                                onChange={() => setEnableInputs(!enableInputs)}
                                name="checkedA"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </AdminCreateModuleEnableButton>
                        <AdminCreateModuleSend> 
                            <TextField 
                                disabled = {enableInputs}
                                id="standard-disabled" 
                                label="Nome do Modulo"
                                value = {nameModuleCreate}
                                onChange = {(event) => setNameModuleCreate(event.target.value)}
                            />
                            <Button style = {{backgroundColor: 'green'}} disabled = {enableInputs} onClick = {handleCreateModule} >Enviar</Button>
                        </AdminCreateModuleSend>
                    </AdminCreateModuleFiled>
                }
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
                                    <TableCell style = {{color: '#312E38'}} align="center">{dateFormat(new Date(module.created_at as Date))}</TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">
                                        <button style = {{backgroundColor: 'transparent',border: 'none'}} onClick = {() => handleOpenModalModule(module.id as string, module.name)}><FiEdit size  = {20} /></button>
                                    </TableCell>
                                    <TableCell style = {{color: '#312E38'}} align="center">
                                        <button style = {{backgroundColor: 'transparent',border: 'none'}} onClick = {() => handleDeleteModule(module.id as string)}> <FiTrash2 size = {20} /> </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </Tables>)
                }

                {
                    viewModal && <ModalClass 
                        idClass = {ObjectClassModal.id}
                        nameClass = {ObjectClassModal.name}
                        isOpen = {viewModal}
                        handleClose = {handleClose}
                    />
                }
                 {seeClasses &&  
                   <AdminCreateModuleFiled>
                        <h2>Aulas</h2>
                        <hr />
                        <AdminCreateModuleEnableButton>
                            <p>Cadastrar</p>
                            <Switch
                                checked={!enableInputs}
                                onChange={() => setEnableInputs(!enableInputs)}
                                name="checkedA"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </AdminCreateModuleEnableButton>
                        <AdminCreateModuleSend> 
                            <TextField 
                                disabled = {enableInputs}
                                id="standard-disabled" 
                                label="Nome da Aula"
                                value = {nameClassCreate}
                                onChange = {(event) => setNameClassCreate(event.target.value)}
                            />
                            <TextField
                                id="date"
                                style = {{marginTop: 35}}
                                disabled = {enableInputs}
                                label="Data da aula"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value = {class_dateCreate}
                                onChange = {(event) => setClassDateCreate(event.target.value)}
                            />
                            <FormControl disabled = {enableInputs} style = {{marginTop: 20, marginBottom: 20}}>
                                <InputLabel id="demo-simple-select-label">Modulo</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value = {moduleClassCreate}
                                onChange = {(event) => setModuleClassCreate(event.target.value as string)}
                                >
                                    {modules.map(module => <MenuItem value = {module.name}>
                                        {module.name}
                                    </MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                            <Button style = {{backgroundColor: 'green'}} disabled = {enableInputs} onClick = {handleCreateClass} >Enviar</Button>
                        </AdminCreateModuleSend>
                    </AdminCreateModuleFiled>
                }

                {seeClasses &&
                    (classes.length === 0 ?
                        <h2 style = {{color: 'black'}}>Nenhuma Aula disponivel</h2>
                        :
                        <Table size="small" stickyHeader >
                            <TableHead>
                                <TableRow className="table-head" >
                                    <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}} align="center"><span>Nome</span></TableCell>
                                    <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}} align="center"><span>Modulo</span></TableCell>
                                    <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}} align="center"><span>Data da aula</span></TableCell>
                                    <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}}align="center"><span>Editar</span></TableCell>
                                    <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}}align="center"><span>Remover</span></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {classes.map(classe => (
                                    <TableRow key={classe.id}>
                                        <TableCell style = {{color: '#312E38'}} align="center">{classe.name}</TableCell>
                                        <TableCell style = {{color: '#312E38'}} align="center">{classe.module}</TableCell>
                                        <TableCell style = {{color: '#312E38'}} align="center">{dateFormat(new Date(classe.class_date))}</TableCell>
                                        <TableCell style = {{color: '#312E38'}} align="center">
                                            <button style = {{backgroundColor: 'transparent',border: 'none'}} onClick = {() => handleOpenModalClass(classe.id, classe.name)}><FiEdit size  = {20} /></button>
                                        </TableCell>
                                        <TableCell style = {{color: '#312E38'}} align="center">
                                            <button style = {{backgroundColor: 'transparent',border: 'none'}} onClick = {() => handleDeleteClass(classe.id)}> <FiTrash2 size = {20} /> </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )
                }
            </AdminContent>
        </AdminContainer>
    )
}

export default AdminPage