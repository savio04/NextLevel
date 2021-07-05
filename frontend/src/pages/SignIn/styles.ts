import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //place-content: center; é a mesma coisa que justify-content e align-items
  width: 100%;
  max-width: 70rem;
  img{
      max-width: 14rem;
  }
  form{
    margin: 3rem 0;
    width: 320px;
    text-align: center;
    h1{
      margin-bottom: 2.4rem;
    }
      a{
        color: #F4EDE8;
        display: block;
        margin-top: 0.2rem;
        text-decoration: none;
        transition: color 0.2s;
        &:hover{
          color: ${shade(0.2,'#F4EDE8')}
        }
      }
  }
  > a{
    color: #6C63FF;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover{
      color: ${shade(0.2, '#6C63FF')}
    }
    svg{
      margin-right: 16px;
    }
  }
`;