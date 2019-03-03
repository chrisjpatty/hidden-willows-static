import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './containers/Header'

import './app.css'

const App = () => (
  <Router>
    <div className='page-wrapper'>
      <Header />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
