'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Main } from './components'
import AppRoutes from './AppRoutes'

import './styles/index.scss'


ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('app')
)
