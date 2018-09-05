import React, { Component } from "react";
import ReactDOM from "react-dom";
import Auth from './containers/Auth'
import Header from './Header'
import Profile from './containers/Profile'
import Home from './Home'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/auth" component={Auth} />
        </div>
      </div>
    )
  }
}
