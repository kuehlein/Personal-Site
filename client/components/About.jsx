'use strict'

import React, { Component } from 'react'
import { ScrollButton } from './'


export default class About extends Component {

  componentWillUnmount() {
    window.dispatchEvent(new Event('popstate'))
  }

  render() {
    document.title = "$ whoami"

    return (
      <div className='position-main fade-in'>
        <div className='text-container'>
          <h1 className='center-text'>My Story</h1>
          <p>
            For as long as I can remember, I have wanted to be a writer. Fascination with plot grew into admiration for description and blossomed with a deep infatuation for the abstract concepts conveyed through words alone using symbolism, metaphor, allegory, and the like. What does it mean to know something? What is information, and how do we share it? I fell in love.
          </p>

          <p>
            During my final year of high school, I was emancipated and self-reliant. I was free to pursue my passions, yet bound by the limitations of my needs. I took on hard work, washing dishes, cooking, construction, all for the sake of self preservation. It was hard work, but I was proud of my labor.
          </p>

          <p>
            After work, I spent the late hours in the day on my craft. Inspired by the likes of Joyce, Hobbes, and Kafka, I investigated meaning and how to convey it through stretching the limits of words, and by interweaving symbolism and metaphor in increasingly complex webs. I delighted in connecting the dots, and solving the problem of how to convey meaning as deeply and richly as possible. My writing was both artistic and surgical, almost mathematical in nature.
          </p>

          <p>
            There was a breaking point. I played a critical role in one of the restaurants that I worked at. I frequently came in on my days off, stayed extra hours and took on responsibilities that others could not. It was not unusual for me to work sixty or seventy hour weeks. Despite the satisfaction in my work I felt, I neglected my intellect and my creativity. I felt a deep sense of longing to feed that which made me, me. I re-committed myself to my passion and sailed into uncharted territory.
          </p>

          <p>
            It was at this point in time where my life was in the hands of fate. Through a serious of miraculous coincidences, I ended up as the unlikely pupil of a software engineer. Through his generosity, I learned the basics of software development. Almost instantly I drew a parallel between writing and coding in my mind. The same logic was there, the flourishes, the same goal; it was just a different language, a different way of looking at things. I fell in love a second time.
          </p>

          <p>
            I devoted every second of my free time to my education, starting with the basics, HTML, CSS, Javascript, and eventually branching off into .NET MVC. It was only a matter of time before I could build full-scale applications. My first was a CRUD app, a blog, followed by a rudimentary e-commerce site. The appetite of my intellect and creative self were sated.
          </p>

          <p>
            Despite my accomplishments, something was missing, something fundamental. I could create, but I did not understand why. I knew the language, but I haphazardly fumbled my way around it with trial and error. I didn’t understand causation.
          </p>

          <p>
            It was at this time that I decided to commit to a bootcamp, so that I could fill in the gaps in my education. I set my sights on the very best, and from my research, that was Fullstack Academy. I eagerly applied, was accepted, and completed my education swiftly. We were pushed to our limits on a daily basis. I would regularly work seven days a week, often twelve hours a day. I was determined to make the most of my education, and I daresay that I have.
          </p>

          <p>
            I am now stepping into a new life as a software engineer, determined for excellence.
          </p>
        </div>
        <ScrollButton />
      </div>
    )
  }

}

// indent text
