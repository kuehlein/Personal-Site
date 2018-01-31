'use strict'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavFace from './NavFace'


export default function Navbar() {
  return (
    <header>
      <NavFace
        text={ 'Click my face to go home 😘' }
        image={ 'favicon.ico' }
        route={ '' }
      />
      <nav>
        <NavLink to='/contact'>Contact Me</NavLink>
        <NavLink to='/resume'>My Resume</NavLink>
      </nav>
    </header>
  )
}
