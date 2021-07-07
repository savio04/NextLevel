import styled from 'styled-components'
import { shade } from 'polished'

export const ButtonStyle = styled.button`
      background-color: #6C63FF;
      padding: 0 16px;
      font-weight: 500;
      font-size: 16px;
      width: 100%;
      border: 0;
      border-radius: 0.5rem;
      height: 56px;
      color: #FFF;
      font-weight: bold;
      margin-top: 16px;
      transition: background-color 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        background-color: ${shade(0.2, '#6C63FF')}
      }
`;