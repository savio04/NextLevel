import React, {ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isFocus?:boolean
}


function ButtonNav({isFocus,children,...rest}:buttonProps){ 

    return(
        <Container
            isFocused = {isFocus}
            {...rest}
        >
            {children}
        </Container>
    )
}

export default ButtonNav