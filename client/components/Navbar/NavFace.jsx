'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


export default function NavFace(props) {
  return (
    <div className='logo-container'>
      <Link to={ `/${props.route}` }>
        <img src={`${props.image}`} className='logo' />
      </Link>
      <div className='speech-bubble speech-bubble-border'>
        { props.text }
      </div>
    </div>
  )
}
