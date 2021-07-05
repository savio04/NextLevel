import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'


const Routes:React.FC = () => {
  return(
    <Switch>
      <Route path = '/' component = {Home} exact />
      <Route path = '/session' component = {SignIn} />
    </Switch>
  )
}


export default Routes;