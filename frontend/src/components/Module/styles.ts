import styled from 'styled-components'
import { shade } from 'polished'

export const ModuleContainer = styled.button`
    background-color: #FFF;
    display: flex;
    border: none;
    border-radius: 0.8rem;
    height: 7rem;
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.6rem #6C63FF;
    transition: background-color 0.3s;
    :hover{
        background-color: ${shade(0.2, '#FFF')};
    }

    div{
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        border-radius: 0.8rem;
        display: flex;
    }
`;

export const ModuleContent = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
    
    p{
        color: black;
    }
`;

export const ModuleIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 20%;
`;

export const ContainerClass = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,16rem);
    grid-gap: 2rem;
    padding: 1rem;
    justify-content: center;
    color: black;
    background-color: #6C63FF;
    border-radius: 0.4rem;
    max-width: 60%;
`;

export const CardClass = styled.div`
    background-color: #FFF;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    h2{
        margin-bottom: 1rem;
    }
    p{
    }
`;