import React from 'react'
import { ModuleContainer,ModuleContent,ModuleIcon,ContainerClass,CardClass } from './styles'
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

  const dateFormat = (data:Date) => {
    const dia  = data.getDate().toString()
    const diaF = (dia.length === 1) ? '0'+dia : dia
    const mes  = (data.getMonth()+1).toString() //+1 pois no getMonth Janeiro começa com zero.
    const mesF = (mes.length === 1) ? '0'+mes : mes
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`
}

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
          style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ContainerClass>
            {
              classes.map(classe => classe.mod_id === id && <CardClass>
                <h2>{classe.name}</h2>
                <p>Data: {dateFormat(new Date(classe.class_date))} </p>
              </CardClass>)
            }
          </ContainerClass>
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