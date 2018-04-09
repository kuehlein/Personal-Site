'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


export default function NavFace(props) {
  const { route, image, handleClick, visible, text, page } = props
  const currentPage = `/${route}` === window.location.pathname
  const mobile = screen.width < 321

  return (
    <div className="logo-container">
      {
        route !== undefined
          ? <Link to={ `/${route}` }>
              <img src={ `${image}` } className="logo face-slide" />
            </Link>
          : <img
              src={ `${image}` }
              onClick={ !mobile ? (() => handleClick(visible)) : undefined }
              className={`menu-toggle ${mobile && visible}`}
            />
      }
      <div className="speech-bubble image-shadow">
        { text }
        {
          currentPage &&
          <div className="you-are-here">
            { "You are here." }
          </div>
        }
      </div>
    </div>
  )
}
