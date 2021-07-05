import styled from 'styled-components'
import { shade } from 'polished'
import { Link } from 'react-router-dom'

export const AdminContainer = styled.div``;
export const HomeContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1{
        width: 100%;
        text-align: center;
        margin-top: 02rem;
    }
`;

export const AdminNavContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 100%;
    border-bottom: solid #6C63FF 0.1rem;
`;

export const AdminNav = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    button{
        background-color: #6C63FF;
        height: 3rem;
        width: 10%;
        border:none;
        border-radius: 0.6rem;
        color: #FFF;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover{
            background-color: ${shade(0.2, '#6C63FF')};
        }
    }

    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        div{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            li{
                list-style: none;
                a{
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: solid transparent 0.2rem;
                    color: #FFF;
                }
                & :hover{
                    border-bottom-color: #FFF;
                }
            }
        }
    }

    @media(max-width: 80rem){
        div{
            li{
                display: none;
            }
        }

        button{
            width: 25%;
        }
    }
`;


export const ButtonLogin = styled(Link)`
    background-color: #6C63FF;
    height: 3rem;
    width: 50%;
    border-radius: 0.6rem;
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: ${shade(0.2, '#6C63FF')};
    }

    @media(max-width: 45rem){
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        margin-right: 0.2rem;
    }
    p{
        font-size: 1.3rem;
        font-weight: bold;
    }
`;