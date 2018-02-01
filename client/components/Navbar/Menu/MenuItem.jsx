'use strict'

import React, { Component } from 'react'


export default class MenuItem extends Component {
  constructor (props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }

  navigate (hash) {
    window.location.hash = hash
  }

  render () {
    return (
      <div
        className='menu-item'
        onClick={ this.navigate(this.props.hash) }
      >
        { this.props.children }
      </div>
    )
  }

}
