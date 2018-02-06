'use strict'

import React from 'react'
import me from '../assets/self1.png'


export default function Home() {
  return (
    <div>
      <img
        src={ me }
        alt='this is a picture of me holding a chihuahua'
        className='image-shadow'
      />
      <div className='text-over-picture'>
        <h3>Writer, musician, kind of weird,</h3>
        <h3>but in a good way.</h3>
        <h5>and developer of course</h5>
      </div>
    </div>
  )
}
