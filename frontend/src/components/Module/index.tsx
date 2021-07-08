import React from 'react'
import { ModuleContainer,ModuleContent,ModuleIcon } from './styles'
import { FiBookOpen } from 'react-icons/fi'
import Modal from '@material-ui/core/Modal'
import { useState } from 'react'
import api from '../../services/api'

export interface IModule{
  id?:string
  name:string
  numberOfClass:number
  created_at?:Date
}

interface IClassDTO{
  id: string,
  name: string
  mod_id: string,
  class_date: Date,
  created_at: Date,
  module: string
}

function Module({id,name,numberOfClass}:IModule){
  const [viewModal,setViewModal] = useState(false)
  const [classes,setClasses] = useState<IClassDTO[]>(() => {
    api.get('/class').then(response => setClasses(response.data))
    return []
  })

  const handleOpen = () => {
    setViewModal(true)
  };

  const handleClose = () => {
    setViewModal(false);
  };

  return(
    <> 
      {viewModal && <Modal 
          open = {viewModal}
          onClose = {handleClose}
        >
          <div>
            {classes.map(classe => classe.mod_id === id && <div>
              <h2>{classe.name}</h2>
              <p> {classe.class_date} </p>
              <p>{classe.module}</p>
            </div>
            )}
          </div>
      </Modal>
      }
      <ModuleContainer onClick = {handleOpen} >
        <div>
          <ModuleContent>
            <h3> {name} </h3>
            <p>Numero de aulas: {numberOfClass} </p>
          </ModuleContent>
          <ModuleIcon>
            <FiBookOpen size = {20} style = {{color:'#312E38'}} />
          </ModuleIcon>
        </div>
      </ModuleContainer>
    </>
  )
}

export default Module