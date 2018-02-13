'use strict'

import React from 'react'


export default function Menu(props) {
  const visibilityClass = `${props.visible ? 'visible' : 'invisible'}`

  return (
    <div id="menu">
      <div className={ typeof props.visible === "string" ? props.visible : visibilityClass }>
        { props.children }
      </div>
    </div>
  )
}
