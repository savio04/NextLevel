import React, {useCallback,useRef,useContext} from 'react'
import { Content, Container } from './styles'
import LogIn from '../../assets/login.svg'
import { FiCornerDownLeft,FiMail,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import {AuthContext} from '../../context/AuthContext'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationsError'
import Alert from '@material-ui/lab/Alert'
interface IInputLogin{
  email:string,
  password:string
}

const SignIn = () => {

  const formRef = useRef<FormHandles>(null)
  const Authcontext =  useContext(AuthContext)
  const { signInContext, isError} = Authcontext

  const handleSubmit = useCallback(async (data:IInputLogin) => {
    try{
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data,{
        abortEarly: false
      })

      await signInContext({
        email: data.email,
        password: data.password
      })
    }catch(err){
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  },[signInContext])
  
  return (
    <Container>
      <Content>
        {isError && 
          <Alert 
            style = {{
              position:'absolute',
              right: '2rem',
              top: '1rem',
              width: '20rem'
            }} 
            severity = 'error'
            variant = 'filled'
            className = 'alert'
            >Email/password incorrect
          </Alert>
        }

        <img src = {LogIn} alt = 'GoBarber' />

        <h1>Faça seu login</h1>
        <Form ref = {formRef} onSubmit = {handleSubmit} >

          <Input placeholder = 'E-mail' name = 'email' icon = {FiMail} />
          <Input name = 'password' type = 'password' placeholder = 'Senha' icon = {FiLock} />

          <Button type = 'submit'>Enviar</Button>
        </Form>


        <Link to="/">
          <FiCornerDownLeft size = {20} />
          voltar
        </Link>
      </Content>
    </Container>
  )
} 

export default SignIn