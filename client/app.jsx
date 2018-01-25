'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Main } from './components'
import AppRoutes from './AppRoutes'


ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('app')
)
