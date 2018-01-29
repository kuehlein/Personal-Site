'use strict'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <div className='logo-container'>
          <img src='favicon.ico' className='logo'/>
          <div className='speech-bubble speech-bubble-border'>
            Click my face to go home 😘
          </div>
        </div>
      </Link>
      <Link to='/resume'>
        <div className='logo-container'>
          <img src='favicon.ico' className='logo'/>
          <div className='speech-bubble'>
            See my stats bro 🧠
          </div>
        </div>
      </Link>
      <div>K Y L E   U E H L E I N</div>
      <nav>
        <NavLink to='/contact'>Contact Me</NavLink>
        <NavLink to='/resume'>My Resume</NavLink>
      </nav>
    </header>
  )
}

// speech bubble
    // transition
    // triangle clipping
    // text underline
    // z-index
    // only visable when hover head
