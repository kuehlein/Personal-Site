'use strict'

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Main } from './components'
import '../public/styles/index.css'


const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={ Main } />
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
