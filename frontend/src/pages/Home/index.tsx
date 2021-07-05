import React from 'react'
import Module, { IModule } from '../../components/Module'
import { useState } from 'react'
import {
    HomeContainer,
    HomeNavContainer,
    HomeContent,
    HomeFooter,
    Image,
    HomeNav,
    ButtonLogin
} from './styles'
import api from '../../services/api'
import { FiBox,FiGithub,FiHeart, FiInstagram, FiLinkedin, FiEyeOff} from 'react-icons/fi'

function Home(){
    const [modules,setModules] = useState<IModule[]>(() => {
        api.get('/module')
        .then(response => setModules(response.data))
        return []
    })
    return(
        <HomeContainer>
            <HomeNavContainer>
                <HomeNav>
                    <Image>
                        <FiBox size = {20}  />
                        <p>NextLevel</p>
                    </Image>
                    <nav>
                        <div>
                            <li><a href="/">Paginal inicial</a></li>
                            <li><a href="https://github.com/savio04/NextLevel">Github</a></li>
                        </div>
                        <ButtonLogin to = '/session'>Login</ButtonLogin>
                    </nav>
                </HomeNav>
            </HomeNavContainer>
            <h1>Modulos disponiveis</h1>
            <HomeContent>
                {modules.length === 0 && 
                    <div style = {{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <h2 style = {{width: '100%',textAlign:'center'}}>
                            <FiEyeOff size = {20}/> Sem modulos
                        </h2>
                    </div>
                }
                {modules.map(module => <Module 
                    name = {module.name} 
                    numberOfClass = {module.numberOfClass} 
                />)}
            </HomeContent>
            <HomeFooter>
                <div>
                    <a href="https://www.instagram.com/savio.araujo0/"><FiInstagram  size= {20}/></a>
                    <a href="www.linkedin.com/in/sávio-araújo-gomes"><FiLinkedin size = {20} /></a>
                    <a href="https://github.com/savio04"><FiGithub size = {20}/></a>
                </div>
                <p>Feito com <FiHeart size = {20} /> para você</p>
            </HomeFooter>
        </HomeContainer>
    )
}

export default Home