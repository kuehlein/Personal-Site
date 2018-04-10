'use strict'

import React from 'react'

import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import octocat from '../../assets/octocat.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'


export default function SocialLinks() {
  return (
    <div className="social-link-container">
      <a href="tel:347-237-1737">
        <img
          src={ phone }
          alt="phone"
          className="social-link"
        />
      </a>
      <a href="mailto:kyleuehlein@gmail.com?Subject=I love your website, you have great taste!">
        <img
          src={ email }
          alt="email"
          className="social-link"
        />
      </a>
      <a target="_blank" href="https://www.github.com/kuehlein/">
        <img
          src={ octocat }
          alt="github"
          className="social-link"
        />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/kyle-uehlein/" >
        <img
          src={ linkedin }
          alt="linkedin"
          className="social-link"
        />
      </a>
      <a target="_blank" href="https://www.twitter.com/kyle_uehlein/">
        <img
          src={ twitter }
          alt="twitter"
          className="social-link"
        />
      </a>
    </div>
  )
}
