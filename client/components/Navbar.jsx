'use strict'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <header>
      <Link to='/'><img src='favicon.ico' className='logo' /></Link>
      <div>K Y L E   U E H L E I N</div>
      <nav>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/resume'>My Resume</NavLink>
      </nav>
    </header>
  )
}
