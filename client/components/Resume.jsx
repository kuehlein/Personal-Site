'use strict'

import React, { Component } from 'react'

import { Document, Page, setOptions } from 'react-pdf/build/entry.webpack'

import resume from '../assets/resume.pdf'


setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  //workerSrc: 'my-path-to-worker.js'
})


class Resume extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }

  onDocumentLoad ({ numPages }) {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div>
        <Document
          file='resume.pdf'
          onLoadSuccess={ this.onDocumentLoad }
        >
          <Page pageNumber={ pageNumber } />
        </Document>
        <p>Page { pageNumber } of { numPages }</p>
      </div>
    )
  }
}








// import React, { Component } from 'react'
// import PDF from 'react-pdf-js'


// export default class MyPdfViewer extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       // page: 0,
//       // pages: 0
//     }
//   }

//   onDocumentComplete (pages) {
//     this.setState({ page: 1, pages })
//   }

//   onPageComplete (page) {
//     this.setState({ page })
//   }

//   handlePrevious () {
//     this.setState({ page: this.state.page - 1 })
//   }

//   handleNext () {
//     this.setState({ page: this.state.page + 1 })
//   }

//   renderPagination (page, pages) {
//     let previousButton = <li className='previous' onClick={ this.handlePrevious }><a href='#'><i className='fa fa-arrow-left'></i> Previous</a></li>
//     if (page === 1) {
//       previousButton = <li className='previous disabled'><a href='#'><i className='fa fa-arrow-left'></i> Previous</a></li>
//     }
//     let nextButton = <li className='next' onClick={ this.handleNext }><a href='#'>Next <i className='fa fa-arrow-right'></i></a></li>
//     if (page === pages) {
//       nextButton = <li className='next disabled'><a href='#'>Next <i className='fa fa-arrow-right'></i></a></li>
//     }
//     return (
//       <nav>
//         <ul className='pager'>
//           { previousButton }
//           { nextButton }
//         </ul>
//       </nav>
//     )
//   }

//   render () {
//     let pagination = null
//     if (this.state.pages) {
//       pagination = this.renderPagination(this.state.page, this.state.pages)
//     }
//     return (
//       <div>
//         <PDF
//           file='resume.pdf'
//           onDocumentComplete={ this.onDocumentComplete }
//           onPageComplete={ this.onPageComplete }
//           page={ this.state.page }
//         />
//         { pagination }
//       </div>
//     )
//   }
// }




// import React from 'react'
// import PDF from 'react-pdf'
// import { Document } from 'react-pdf/build/entry.webpack'

// import resume from '../assets/resume.pdf'


// export default function Resume() {
//   return (
//     <div>
//       Resume
//       {/* <PDF file={ resume } scale={ 1.5 } /> */}
//     </div>
//   )
// }


// // experience / resume
