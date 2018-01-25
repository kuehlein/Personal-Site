'use strict'

import React, { Component } from 'react'
import { Navbar } from './'

import '../../public/styles/index.scss'


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
      <div>
        <Navbar />
        MAIN
        { this.props.children }
      </div>
    )
  }

}
