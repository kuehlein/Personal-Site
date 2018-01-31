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
        {/* MAIN */}
        <div className='main-child'>
          { this.props.children }
        </div>
      </div>
    )
  }

}
