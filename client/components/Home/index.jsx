'use strict'

import React, { Component } from 'react'
import me1 from '../../assets/self1.png'
import me2 from '../../assets/self2.png'

import './_home.scss'


export default class Home extends Component {

  componentWillUnmount() {
    window.dispatchEvent(new Event('popstate'))
  }

  render() {
    document.title = "Kyle Uehlein 🏠"
    const shadow = screen.width > 321 ? 'image-shadow' : ''

    return (
      <div className={`position-main ${shadow} fade-in`}>
        {
          screen.width > 321
            ? <img
                src={ me1 }
                alt="this is a picture of me holding a chihuahua"
              />
            : <img
                src={ me2 }
                alt="this is a picture of me holding a chihuahua"
              />
        }
        <div className="text-over-picture">
          <h3>Creative solutions</h3>
          <h3>for your</h3>
          <h3>software needs</h3>
          <h3>since 2017</h3>
          {/* <h3>Writer, musician,</h3>
          <h3>interesting individual,</h3>
          <h3>but in a good way.</h3>
          <h5>(and software engineer extraordinaire)</h5> */}
        </div>
      </div>
    )
  }

}
