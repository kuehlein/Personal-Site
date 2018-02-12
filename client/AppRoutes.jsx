'use strict'

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Main, Home, About, Projects, Blog, Resume } from './components'

import gourdSpinner from './assets/gourdspinner.png'


export default class AppRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 600)
  }

  render() {

    return (
      <div>
        {
          this.state.loading
            ? <img src={ gourdSpinner } className="gourd-spinner" />
            : <Main>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/about" component={ About } />
                  <Route exact path="/projects" component={ Projects } />
                  <Route exact path="/blog" component={ Blog } />
                  <Route exact path="/resume" component={ Resume } />
                  <Redirect to="/" />
                </Switch>
            </Main>
        }
      </div>
    )
  }

}
