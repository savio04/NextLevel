import React, {ButtonHTMLAttributes} from 'react'
import { ButtonStyle } from './styles'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props:buttonProps) => {
  return <ButtonStyle {...props}></ButtonStyle>
}

export default Button