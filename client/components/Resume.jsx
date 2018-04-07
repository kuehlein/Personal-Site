'use strict'

import React, { Component } from 'react'
import ScrollButton from './ScrollButton'
import { Document, Page, setOptions } from 'react-pdf/dist/entry.noworker'

import resume from '../assets/resume.pdf'

import Fish from '../assets/francisco-goya-fish.svg'
// Fish = fish.replace('\ufeff', '')

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true
})


export default class Resume extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      transition: 'in'
    }
    this.onDocumentLoad = this.onDocumentLoad.bind(this)
  }

  componentWillUnmount() {
    this.setState({ transition: 'out' })
    window.dispatchEvent(new Event('popstate'))
  }

  onDocumentLoad ({ numPages }) {
    this.setState({ numPages: 1 })
  }

  render() {
    const { pageNumber, numPages } = this.state
    document.title = "My Résumé"

    return (
      <div>
        <div className={`resume-container fade-${this.state.transition}`}>
          <Document
            file={ resume }
            onLoadSuccess={ this.onDocumentLoad }
            className="resume-pdf"
          >
            <Page pageNumber={ pageNumber } scale={ 1.6111 }/>
          </Document>
        </div>
        {/* <p>Page { pageNumber } of { numPages }</p> */}
        <div className="button-container">
          <a
            href={ resume }
            download="Kyle_Uehlein_Resume.pdf"
            className="button-download"
          >
            Download
          </a>
        </div>
        <ScrollButton />
        <div dangerouslySetInnerHTML={{__html: fish}} ></div>
        {/* <img src={ fish } /> */}
        {/* <svg>
          <image href={ fish }/>
        </svg> */}
        {/* <fish /> */}
      </div>
    )
  }

}


// why is there extra space at bottom of resume
