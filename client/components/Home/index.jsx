'use strict'

import React, { Component } from 'react'
import me from '../../assets/self1.png'

import './_home.scss'


export default class Home extends Component {

  componentWillUnmount() {
    window.dispatchEvent(new Event('popstate'))
  }

  render() {
    document.title = "Kyle Uehlein 🏠"

    return (
      <div className="position-main image-shadow fade-in">
        <img
          src={ me }
          alt="this is a picture of me holding a chihuahua"
        />
        <div className="text-over-picture">
          <h3>Writer, musician, kind of weird,</h3>
          <h3>but in a good way.</h3>
          <h5>(and developer of course)</h5>
        </div>
      </div>
    )
  }

}
