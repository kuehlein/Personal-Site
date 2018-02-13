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
      visible: 'initial',
      page: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handleLocationChange)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleLocationChange)
  }

  handleClick(toggle) {
    typeof toggle === 'string'
      ? this.setState({ visible: !!toggle })
      : this.setState({ visible: !toggle })
  }

  handleLocationChange() {
    if (this.state.page !== window.location.href) {
      this.setState({ page: window.location.href, visible: 'fade-out-menu' })
    }
  }

  render() {
    const { visible } = this.state
console.log('hit', visible)
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

// fade out
    // with location change
    // page itself ???

// move heads when menu open

// clicking on home renders other nav options

// speech bubble
    // they moved
    // hover messed up
    // opacity
