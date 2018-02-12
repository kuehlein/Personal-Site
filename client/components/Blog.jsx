'use strict'

import React, { Component } from 'react'


export default class Blog extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    //get some junk on mount
  }

  render () {
    document.title = "My Blog Posts"

    return (
      <div>
        Blog
      </div>
    )
  }

}



// blog posts (NOT YET)
