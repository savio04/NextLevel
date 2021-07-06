import React from 'react'
import { ModuleContainer,ModuleContent,ModuleIcon } from './styles'
import { FiBookOpen } from 'react-icons/fi'

export interface IModule{
  id?:string
  name:string
  numberOfClass:number
  created_at?:Date
}

function Module({id,name,numberOfClass}:IModule){
  return(
    <ModuleContainer >
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
  )
}

export default Module