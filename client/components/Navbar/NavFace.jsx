'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


export default function NavFace(props) {
  const { route, image, handleClick, visible, text } = props

  return (
    <div className="logo-container">
    {
      route !== undefined
        ? <Link to={ `/${route}` }>
            <img src={ `${image}` } className="logo face-slide" />
          </Link>
        : <img
            src={ `${image}` }
            onClick={ () => handleClick(visible) }
            className="menu-toggle"
          />
    }
    <div className="speech-bubble image-shadow">
      { text }
    </div>
  </div>
  )
}
