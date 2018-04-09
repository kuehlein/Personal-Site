'use strict'

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavFace from './NavFace'
import Menu from './Menu'
import SocailLinks from './SocialLinks'

import './_navbar.scss'

import homeFace from '../../assets/homeFace.png'
import waiter from '../../assets/waiter.png'
import face1 from '../../assets/face1.png'
import glasses from '../../assets/glasses.png'
import fish from '../../assets/small-fish.png'


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
    const { visible, page } = this.state

    return screen.width > 321
      ? (
        <header>
          <NavFace
            text="There's no place like home..."
            image={ homeFace }
            route=""
            page={ page }
            />
          <div>
            <NavFace
              text="Menu?"
              image={ waiter }
              handleClick={ this.handleClick }
              visible={ visible }
            />
            {
              <Menu visible={ visible }>
                <NavFace
                  text="About me"
                  image={ glasses }
                  route="about"
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
                  text="My résumé"
                  image={ face1 }
                  route="resume"
                />
                {/* v temporarily used for positioning */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* ^ temporarily used for positioning */}
              </Menu>
            }
          </div>
          <SocailLinks />
        </header>
        )
      : (
        <header>
          <div className="mobile-nav">
            <NavFace
              text="There's no place like home..."
              image={ homeFace }
              route=""
              page={ page }
            />
            <SocailLinks />
          </div>
          <div>
            <NavFace
              text="Menu?"
              image={ fish }
              handleClick={ this.handleClick }
              visible={ visible }
            />
            {
              <Menu visible={ visible }>
                <NavFace
                  text="About me"
                  image={ glasses }
                  route="about"
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
                  text="My résumé"
                  image={ face1 }
                  route="resume"
                />
                {/* v temporarily used for positioning */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* ^ temporarily used for  positioning */}
              </Menu>
            }
          </div>
        </header>
      )
  }

}

// fix timing on initial menu open
