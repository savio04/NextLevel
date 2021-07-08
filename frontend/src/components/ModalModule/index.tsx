import React from 'react'
import Modal from '@material-ui/core/Modal'
import api from '../../services/api'
import 'date-fns';
import { Container, Form, ButtonConfirm, ButtonCancel, DivButtons} from './styles'
import { useState } from 'react';

interface IModalProps{
    isOpen:boolean
    handleClose():void
    nameModule:string
    idModule:string
}
function ModalModule({idModule,nameModule,isOpen,handleClose}:IModalProps){
    const [name,setName] = useState('')

    const handleUpdateModule = async () => {
        const token = localStorage.getItem('@Plataform:token')
        await api.put(`/module/${idModule}`,
        {
            name,
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
                        <h3>Modulo: {nameModule} </h3>
                        <input type="text" 
                            placeholder = 'Novo nome' 
                            value = {name}
                            onChange = {(event) => setName(event.target.value)}
                        />
                        <DivButtons>
                            <ButtonConfirm onClick = {handleClose}>Cancelar</ButtonConfirm>
                            <ButtonCancel onClick = {handleUpdateModule} >Atualizar</ButtonCancel>
                        </DivButtons>
                    </Form>
                </div>
            </Container>
        </Modal>
    )
}

export default ModalModule