import React from 'react'
import Module, { IModule } from '../../components/Module'
import { useState } from 'react'
import {
    HomeContainer,
    HomeNavContainer,
    HomeContent,
    HomeFooter,
    Image,
    HomeNav
} from './styles'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import api from '../../services/api'

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
                        <img src={Logo} alt="logo reactJs"  />
                    </Image>
                    <nav>
                        <li><Link to="/session">Login</Link></li>
                    </nav>
                </HomeNav>
            </HomeNavContainer>
            <HomeContent>
                {modules.map(module => <Module 
                    name = {module.name} 
                    numberOfClass = {module.numberOfClass} 
                />)}
            </HomeContent>
            <HomeFooter>
                <h2>Eu que fiz</h2>
                <p>teste</p>
            </HomeFooter>
        </HomeContainer>
    )
}

export default Home