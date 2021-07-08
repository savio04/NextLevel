import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    div{
        width: 40%;
        height: 100%;
    }
    h3{
        margin-bottom: 1rem;
        font-weight: bold;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    background-color: #778899;
    padding: 2rem;
    border-radius:1rem;
    input{
        padding: 0.2rem;
        height: 2rem;
        margin-top: 0.4rem;
        border-radius: 0.3rem;
        border: none;
    }
    select{
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
        background-color: #FFF;
        height: 2rem;
        border: none;
    }
`;

export const DivButtons = styled.div`
`;
export const ButtonConfirm = styled.button`
    border: none;
    width: 5rem;
    height: 2rem;
    border-radius: 0.4rem;
    background-color: red;
`;
export const ButtonCancel = styled.button`
    border: none;
    width: 5rem;
    height: 2rem;
    border-radius: 0.4rem;
    background-color: green;
    margin-left: 2rem;
`;
