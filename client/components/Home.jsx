'use strict'

import React, { Component } from 'react'

import me from '../assets/self1.png'


export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    //get some junk on mount
  }

  render () {
    return (
      <div>
        <img src={me} alt='this is a picture of me holding a chihuahua' />
        <h3>writer, musician, kind of weird, but in a good way</h3>
        <h5>and developer of course</h5>
      </div>
    )
  }

}


// very simple and elegant / minimalist
    // include name, maybe picture, one sentace description of myself

