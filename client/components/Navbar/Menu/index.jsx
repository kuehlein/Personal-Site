'use strict'

import React from 'react'

import fish from '../../../assets/francisco-goya-fish.png'


export default function Menu(props) {
  const visibilityClass = `${props.visible ? 'visible' : 'invisible'}`

  return (
    <div
      id="menu"
      className={ typeof props.visible === "string" ? props.visible : visibilityClass }
    >
      <img src={ fish } className="fish" />
      { props.children }
    </div>
  )
}
