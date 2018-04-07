'use strict'

module.exports = content => (
  'module.exports = require("react").createElement("span", {' +
    'dangerouslySetInnerHTML: {' +
      '__html: ' + JSON.stringify(content) +
    '}' +
  '})'
)
