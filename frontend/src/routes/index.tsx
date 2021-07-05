import React from 'react'
import { Switch,BrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import { Router } from './route'
import Home from '../pages/Home'
import AdminPage from '../pages/Admin'


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Router path = '/' component = {Home} exact />
        <Router path = '/session' component = {SignIn} />
        <Router path = '/admin' component = {AdminPage} isProvider/>
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;