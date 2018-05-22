'use strict'

import React from 'react'
import { Link } from 'react-router-dom'


export default function NavFace(props) {
  const { route, image, handleClick, visible, text, page } = props
  const currentPage = `/${route}` === window.location.pathname
  const visibility = visible ? 'visible' : 'invisible'
  const mobile = screen.width < 415

  return (
    <div className="logo-container">
      {
        route !== undefined
          ? <Link to={ `/${route}` }>
              <img src={ `${image}` } className={`logo ${!route ? "home-logo": "face-slide"}`} />
            </Link>
          : <img
              src={ `${image}` }
              onClick={ () => handleClick(visible) }
              className={`menu-toggle ${mobile && typeof visible !== "string" && visibility}`}
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
