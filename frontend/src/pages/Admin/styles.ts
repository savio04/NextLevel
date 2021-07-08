import styled from 'styled-components'


export const AdminContainer = styled.div`
    display: flex;
    background-color: #FFF;
    padding-bottom: 2rem;
`;

/**Side Bar */

export const AdminSideBar = styled.section`
    width: 20rem;
    height: 100vh;
    border-bottom-right-radius: 2rem;
    margin-right: 3rem;
    box-shadow: 0.2rem 0rem 1.5rem rgba(0,0,0,0.2);

    header{
        color: #778899;
        margin-top: 1.4rem;
        margin-left: 1.8rem;
    }

    h2{
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    p{
        font-size: 0.9rem;
    }
`;

export const AdminNav = styled.nav`
    margin-top: 1.2rem;

    ul{
        margin-top: 3rem;
    }
    li{
        list-style: none;
        width: 100%;
        height: 3rem;
        margin-top: .2rem;   
    }

    button{
        border-radius: 0;
    }

    svg{
        margin-right: 0.8rem;
    }
`;

/**Create  */

export const AdminModuleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const AdminCreatemodule = styled.div`
    margin-top: 3rem;
    max-height: 14rem;
    width: 100%;
`;

export const AdminContent = styled.div`
    width: 80%;
    margin-top: 3rem;
`;

export const AdminCreateModuleFiled = styled.div`
    color: black;
    margin-bottom: 4rem;
    h2{
        margin-bottom: 1rem;
    }
`;
export const AdminCreateModuleEnableButton = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`;

export const AdminCreateModuleSend = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30%;
    button{
        margin-top: 1rem;
    }
`;