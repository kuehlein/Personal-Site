'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class ScrollButton extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('top-button').style.display = 'block'
    } else {
      document.getElementById('top-button').style.display = 'none'
    }
  }

  scrollToTop () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
