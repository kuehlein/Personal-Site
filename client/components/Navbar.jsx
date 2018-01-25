'use strict'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => (
  <header>
    <Link to='/'><img src='favicon.ico' className='logo' /></Link>
    <div>K Y L E   U E H L E I N</div>
    <nav>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  </header>
)


export default Navbar
