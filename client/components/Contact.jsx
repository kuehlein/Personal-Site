'use strict'

import React from 'react'

import phone from '../assets/phone.png'
import email from '../assets/email.png'
import octocat from '../assets/octocat.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'



export default function Contact() {
  return (
    <div className="text-container">
      <h1 className="center-text">Contact Me</h1>
      <a href="tel:347-237-1737">
        <img
          src={ phone }
          alt="phone"
          className="logo"
        />
      </a>
      <a href="mailto:kyleuehlein@gmail.com?Subject=I love your website, you have great taste">
        <img
          src={ email }
          alt="email"
          className="logo"
        />
      </a>
      <a target="_blank" href="https://github.com/kuehlein">
        <img
          src={ octocat }
          alt="github"
          className="logo"
        />
      </a>
      <a target="_blank" href="https://linkedin.com/in/kyle-uehlein" >
        <img
          src={ linkedin }
          alt="linkedin"
          className="logo"
        />
      </a>
      <a target="_blank" href="https://twitter.com/kyle_uehlein">
        <img
          src={ twitter }
          alt="twitter"
          className="logo"
        />
      </a>
    </div>
  )
}


// move to navbar
