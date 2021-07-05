import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

export const HomeNavContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 100%;
    border-bottom: solid #6C63FF 0.1rem;
`;

export const HomeNav = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;

    nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        li{
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
            a{
                text-decoration: none;
                background-color: #6C63FF;
                padding: 1rem;
                border-radius: 0.4rem;
                color: #FFF;
                font-weight: bold;
            }
        }
    }
`;

export const Image = styled.div`
    width: 7rem;
    img{
        width: 100%;
    }
`;
export const HomeContent = styled.section`
    display: grid;
    grid-area: content;
    grid-template-columns: repeat(auto-fit,18rem);
    max-width: 70%;
    height: 100%;
    margin-top: 2rem;
    column-gap: 1.5rem;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
`;
export const HomeFooter = styled.footer`
    background-color: #6C63FF;
    width: 100%;
    h2{
        color: #FFF;
    }

    p{
        color: #FFF;
    }
`;