import styled, { css } from 'styled-components'

interface btnProps{
    isFocused?:boolean
}

export const Container = styled.button<btnProps>`
    background-color: transparent;
    color: #778899;
    border: none;
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: start;
    margin-left: 2rem;
    transition: transform 0.2s;
    ${({isFocused}) => isFocused && css`
        color: #6C63FF;
        font-weight: bold;
    `}

    :hover{
        transform: translate(0.2rem);
    }
`;