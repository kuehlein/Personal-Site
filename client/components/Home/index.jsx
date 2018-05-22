'use strict'

import React, { Component } from 'react'
import me1 from '../../assets/self1.png'
import me3 from '../../assets/self-alt.png'
import me2 from '../../assets/self2.png'

import './_home.scss'


export default class Home extends Component {

  componentWillUnmount() {
    window.dispatchEvent(new Event('popstate'))
  }

  render() {
    document.title = "Kyle Uehlein 🏠"
    const shadow = screen.width > 415 ? 'image-shadow' : ''

    return (
      <div className={`position-main picture-frame ${shadow} fade-in`}>
        {
          screen.width > 415
            ? <img
                src={ me1 }
                alt="karaoke time"
              />
            : <img
                src={ me2 }
                alt="me, this picture is overexposed"
              />
        }
        <div className="text-over-picture">
          <h3>Creative solutions</h3>
          <h3>for your</h3>
          <h3>software needs</h3>
          <h3>since 2017</h3>
          <div></div>
          {
            screen.width > 415 &&
            <h3><pre>                                                                     me</pre></h3>
          }
        </div>
      </div>
    )
  }

}
