"use strict";

import React, { Component } from "react";
import { ScrollButton } from "../";

import "./_about.scss";

export default class About extends Component {
  componentWillUnmount() {
    window.dispatchEvent(new Event("popstate"));
  }

  render() {
    document.title = "$ whoami";

    return (
      <div className="position-main fade-in">
        <div className="text-container">
          <h1 className="center-text">About Me</h1>
          <p className="text-indent-about">
            Hi, my name is Kyle Uehlein. I suppose that I am a lot of things; a
            writer, musician and software engineer to name a few, but if I had
            to guess, I would say that you're most likely interested in the
            latter.
          </p>
          <p className="text-indent-about">
            I have been coding since 2016. I initially taught myself Javascript
            and C# while I was working as a cook and a contractor's assistant,
            as well as other fundamentals, such as HTML, CSS and Bootstrap. I
            reached a point where I could make full blown CRUD applications, but
            I was lacking in understanding of many fundamental concepts of
            computer science.
          </p>
          <p className="text-indent-about">
            It was at this point that I decided to get a proper education. I
            decided to enroll in, and recently graduated from{" "}
            <a href="https://www.fullstackacademy.com/">Fullstack Academy</a>,
            an exclusive coding bootcamp with an excellent reputation.
          </p>
          <p className="text-indent-about">
            During my tenure at Fullstack, I had built multiple projects, either
            as the sole developer, or in a team of developers. My final project,
            or "Capstone" is a Google Chrome extension called Code Mode.{" "}
            <a href="https://www.youtube.com/watch?v=H9oYe_8Ks9M">Here</a> is a
            brief presentation that my team and I conducted.
          </p>
          <p className="text-indent-about">
            Since graduation, I have also completed a few projects. One, an npm
            library called Vobe, was a library focused on software architecture.
            It sought to manage the "visual state" of an application by handling
            a sort of "model" in state that presented varying sets of components
            based on the current "mode" of the application.
          </p>
          <p className="text-indent-about">
            This website that you are currently browsing is another one of the
            projects that followed. Perhaps the style is a little unorthodox,
            but this is my personal site after all, I'm just having fun with it.
          </p>
          <p className="text-indent-about">
            The most recent application that I have created is called{" "}
            <a href="https://data-search-usa.herokuapp.com/">Data Search USA</a>.
            This application allows users to create custom API requests to{" "}
            <a href="https://datausa.io/">datausa.io</a> and presents that data
            for the user to browse. Stylistically, Data Search USA is more
            refined than this one (just in case you were looking for something a
            little more subtle). *A quick note* This site, as well as Data
            Search USA are hosted on Heroku for free. This means that the dynos
            have to boot up which may take about 30 seconds resulting in long
            loading times. I'm sorry for the inconvenience.
          </p>
          <p className="text-indent-about">
            All in all, I'm passionate about my work and place the upmost
            importance on writing quality code using industry best practices. If
            you have questions about my work, or anything else for that matter,
            please do not hesitate to contact me. My email and phone, as well as
            linkedin and github profiles, are listed on the navbar for your
            convenience. Thank you so much for taking the time to check out my
            site.
          </p>
          <p className="text-indent-about">Kyle</p>
        </div>
        <ScrollButton />
      </div>
    );
  }
}

/*
<p>
Hi, my name is Kyle Uehlein. I suppose that I am a lot of things; a writer, musician and software engineer to name a few, but if I had to guess, I would say that you're most likely interested in the latter.
</p>
<p>
I have been coding since 2016. I initially taught myself Javascript and C# while I was working as a cook and a contractor's assistant, as well as other fundamentals, such as HTML, CSS and Bootstrap. I reached a point where I could make full blown CRUD applications, but I was lacking in understanding of many fundamental concepts of computer science.
</p>
<p>
It was at this point that I decided to get a proper education. I decided to enroll in, and recently graduated from <a href="https://www.fullstackacademy.com/">Fullstack Academy</a>, an exclusive coding bootcamp with an excellent reputation.
</p>
*/
