'use strict'

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavFace from './NavFace'
import Menu from './Menu'
import SocailLinks from './SocialLinks'

import waiter from '../../assets/waiter.png'


export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: 'initial'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLocationChange = this.handleClick.bind(this)
  }

  handleClick(toggle) {
    typeof toggle === 'string'
      ? this.setState({ visible: !!toggle })
      : this.setState({ visible: !toggle })
  }

  componentWillReceiveProps() { // ???
    this.setState({ visible: 'fade-out' })
  }

  render() {
    const { visible } = this.state

    return (
      <header>
        <NavFace
          text={ "There's no place like home..." }
          image={ "homeFace.ico" }
          route={ "" }
          />
        <div>
          <NavFace
            text={ "Menu?" }
            image={ waiter }
            handleClick={ this.handleClick }
            visible={ visible }
          />
          {
            <Menu visible={ visible }>
              <NavFace
                text={ "$ whoami" }
                image={ "favicon.ico" }
                route={ "about" }
              />
              {/* <NavFace
                text={ "i made this stuff 🛠" }
                image={ "favicon.ico" }
                route={ "projects" }
              />
              <NavFace
                text={ "musings on software 📝" }
                image={ "favicon.ico" }
                route={ "blog" }
              /> */}
              <NavFace
                text={ "check out mah stats bruh 🧠" }
                image={ "favicon.ico" }
                route={ "resume" }
              />
            </Menu>
          }
        </div>
        <SocailLinks />
      </header>
    )
  }

}
