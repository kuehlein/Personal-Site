'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class ScrollButton extends Component {
  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    document.getElementById('main-container').addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    document.getElementById('main-container').removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    if (document.getElementById('main-container').scrollTop > 20) {
      document.getElementById('top-button').style.display = 'block'
    } else {
      document.getElementById('top-button').style.display = 'none'
    }
  }

  scrollToTop () {
    document.getElementById('main-container').scrollTop = 0
  }

  render () {
    return (
      <div onScroll={ this.handleScroll }>
        <button
          onClick={ this.scrollToTop }
          id='top-button'
          className='image-shadow'
        >
          Top
        </button>
      </div>
    )
  }

}
