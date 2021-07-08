import React from 'react'
import Modal from '@material-ui/core/Modal'
import api from '../../services/api'
import 'date-fns';
import { Container, Form, ButtonConfirm, ButtonCancel, DivButtons} from './styles'
import { useState } from 'react';
import { IModule } from '../Module';

interface IModalProps{
    isOpen:boolean
    handleClose():void
    nameClass:string
    idClass:string
}
function ModalClass({idClass,nameClass,isOpen,handleClose}:IModalProps){
    const [module,setModule] = useState('')
    const [name,setName] = useState('')
    const [class_date,setClassDate] = useState('')
    const [modules,setModules] = useState<IModule[]>(() => {
        api.get('/module')
        .then(response => setModules(response.data))
        return []
    })

    const handleUpdateClass = async () => {
        const token = localStorage.getItem('@Plataform:token')
        await api.put(`/class/${idClass}`,
        {
            name,
            class_date,
            module,
        },
        {headers: 
            {Authorization: `Bearer ${token}`}
        }
        )
    }

    return(
        <Modal
            open = {isOpen}
            onClose = {handleClose}
        >
            <Container>
                <div>
                    <Form action="">
                        <h3>Aula: {nameClass} </h3>
                        <input type="text" 
                            placeholder = 'Novo nome' 
                            value = {name}
                            onChange = {(event) => setName(event.target.value)}
                        />
                        <input type="date" 
                            value = {class_date}
                            onChange = {(event) => setClassDate(event.target.value)}
                        />
                        <select name="" id="" value = {module} onChange = {(event) => setModule(event.target.value)}>
                            {modules.map(module => <option> {module.name}</option>)}
                        </select>
                        <DivButtons>
                            <ButtonConfirm onClick = {handleClose}>Cancelar</ButtonConfirm>
                            <ButtonCancel onClick = {handleUpdateClass} >Atualizar</ButtonCancel>
                        </DivButtons>
                    </Form>
                </div>
            </Container>
        </Modal>
    )
}

export default ModalClass