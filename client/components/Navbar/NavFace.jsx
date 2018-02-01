'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


export default function NavFace(props) {
  const { route, image, text } = props
console.log('route: ', props)
  return (
    <div className='logo-container'>
    {
      route !== undefined
        ? <Link to={ `/${props.route}` }>
            <img src={ `${props.image}` } className='logo' />
          </Link>
        : <button>
            <img src={ `${props.image}` } className='logo' />
          </button>
    }
      <div className='speech-bubble speech-bubble-border'>
        { props.text }
      </div>
    </div>
  )
}
