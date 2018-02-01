'use strict'

import React from 'react'


export default function Menu(props) {
  const visibilityClass = `${props.visible ? 'visible' : ''}`

  return (
    <div className='menu'>
      <div className='visible'>
        { props.children }
      </div>
    </div>
  )

}


// because menu is not 'hidden', there is no transition when it becomes visible
