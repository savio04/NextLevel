import React, {useCallback,useRef} from 'react'
import { Content, Container } from './styles'
import Logo from '../../assets/logo.svg'
import { FiCornerDownLeft,FiMail,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationsError'

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  
  const handleSubmit = useCallback(async (data:object) => {
    try{
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data,{
        abortEarly: false
      })
    }catch(err){
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <Form ref = {formRef} onSubmit = {handleSubmit} >
          <h1>Faça seu login</h1>

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