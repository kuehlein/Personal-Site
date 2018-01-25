'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './AppRoutes'


render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('app')
)
