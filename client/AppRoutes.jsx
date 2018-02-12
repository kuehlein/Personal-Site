'use strict'

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Main, Home, About, Projects, Blog, Resume } from './components'


export default function AppRoutes() {
  return (
    <Main>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/projects' component={ Projects } />
        <Route exact path='/blog' component={ Blog } />
        <Route exact path='/resume' component={ Resume } />
        <Redirect to='/' />
      </Switch>
    </Main>
  )
}
