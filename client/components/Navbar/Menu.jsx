'use strict'

import React from 'react'

import fish from '../../assets/francisco-goya-fish.png'


export default function Menu(props) {
  const visibilityClass = `${props.visible ? 'visible' : 'invisible'}`
  const mobile = screen.width < 415

  return (
    <div
      id="menu"
      className={ typeof props.visible === "string" ? props.visible : visibilityClass }
    >
      {
        !mobile &&
        <img src={ fish } className="fish" />
      }
      { props.children }
    </div>
  )
}
