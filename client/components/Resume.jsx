'use strict'

import React, { Component } from 'react'
import ScrollButton from './ScrollButton'
import { Document, Page, setOptions } from 'react-pdf/build/entry.noworker'

import resume from '../assets/resume.pdf'


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
    }
    this.onDocumentLoad = this.onDocumentLoad.bind(this)
  }

  onDocumentLoad ({ numPages }) {
    this.setState({ numPages: 1 })
  }

  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div>
        <div className="resume-container">
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
      </div>
    )
  }

}
