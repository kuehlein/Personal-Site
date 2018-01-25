'use strict'

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Main, Contact } from './components'


const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={ Main } />
    <Route exact path='/contact' component={ Contact } />
    {
      // About
      // Contact
      // Resume
      // ???
    }
    <Redirect to='/' />
  </Switch>
)


export default AppRoutes
