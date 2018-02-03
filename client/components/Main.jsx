'use strict'

import React, { Component } from 'react'
import { Navbar } from './'


export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    //get some junk on mount
  }

  render () {
    return (
      <div className='main-container'>
        <Navbar />
        <h1 style={{ position: 'absolute', top: 0, marginLeft: '0.479em' }}>Kyle Uehlein</h1>
        <div className='main-child'>
          { this.props.children }
        </div>
      </div>
    )
  }

}
