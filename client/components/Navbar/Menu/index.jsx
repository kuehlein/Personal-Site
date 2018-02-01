'use strict'

import React from 'react'


export default function Menu(props) {
  const visibilityClass = `${(props.visible ? 'visible ' : '')}${props.alignment}`

  return (
    <div className='menu'>
      <div className={ visibilityClass }>
        { props.children }
      </div>
    </div>
  )

}
