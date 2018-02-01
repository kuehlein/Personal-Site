'use strict'

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavFace from './NavFace'
import Menu from './Menu'


export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ visible: !visible })
  }

  render () {
    const { visible } = this.state

    return (
      <header>
        <NavFace
          text={ 'Click my face to go home 🏚' }
          image={ 'favicon.ico' }
          route={ '' }
        />
        <NavFace
          text={ 'open the menu bby 😘' }
          image={ 'favicon.ico' }
          onClick={ this.handleClick }
        />

        {
          visible &&
          <Menu visible={ visible }/>
        }

        <nav>
          <NavLink to='/contact'>Contact Me</NavLink>
          <NavLink to='/resume'>My Resume</NavLink>
        </nav>
      </header>
    )
  }

}
