'use strict'

import React from 'react'

import fish1 from '../../assets/francisco-goya-fish.png'
import fish2 from '../../assets/small-fish.png'


export default function Menu(props) {
  const visibilityClass = `${props.visible ? 'visible' : 'invisible'}`
  const fish = screen.width > 321 ? fish1 : fish2

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
