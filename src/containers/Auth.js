import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Auth = props => (
  <div className="container">
    <h1>Auth</h1>
    <p>Please login or register</p>
    <div className="tab__container">
      <div className='menu__item'><Link to="/auth/register">Register</Link></div>
      <div className='menu__item'><Link to="/auth/login">Login</Link></div>
    </div>  
    <Route path={`${props.match.url}/login`} component={Login} />
    <Route path={`${props.match.url}/register`} component={Register} />
  </div>
)

export default Auth
  