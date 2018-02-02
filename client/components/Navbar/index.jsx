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

  handleClick (toggle) {
    this.setState({ visible: !toggle })
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
          handleClick={ this.handleClick }
          visible={ visible }
        />
        {
          visible &&
          <Menu visible={ visible }> {/* unnecessary? */}
            <NavFace
              text={ 'check out mah stats bruh 🧠' }
              image={ 'favicon.ico' }
              route={ 'resume' }
            />
            <NavFace
              text={ 'stalk me with this info 👀' }
              image={ 'favicon.ico' }
              route={ 'contact' }
            />
          </Menu>
        }
      </header>
    )
  }

}
