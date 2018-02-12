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
            <img src={ `${image}` } className="logo" />
          </Link>
        : <div onClick={ () => handleClick(visible) }>
            <img src={ `${image}` } className="menu-toggle" />
          </div>
    }
      <div className="speech-bubble speech-bubble-border image-shadow">
        { text }
      </div>
    </div>
  )
}
