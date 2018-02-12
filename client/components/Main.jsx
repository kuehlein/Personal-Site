'use strict'

import React from 'react'
import { Navbar } from './'


export default function Main(props) {
  return (
    <div id="main-container">
      <Navbar />
      <div className="name-container">
        <h1 className="name-position">K</h1>
        <h1 className="name-position">y</h1>
        <h1 className="name-position">l</h1>
        <h1 className="name-position">e</h1>
        <h1 className="name-position"><br /></h1>
        <h1 className="name-position">U</h1>
        <h1 className="name-position">e</h1>
        <h1 className="name-position">h</h1>
        <h1 className="name-position">l</h1>
        <h1 className="name-position">e</h1>
        <h1 className="name-position">i</h1>
        <h1 className="name-position">n</h1>
      </div>
      <div className="main-child">
        { props.children }
      </div>
    </div>
  )
}


// fix z index of page
// add transitions to pages
