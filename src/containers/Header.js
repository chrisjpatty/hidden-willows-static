import React from 'react'
import { Link } from 'react-static'
import logo from '../img/logo.svg'

export default () => {

  return (
    <header>
      <img className="logo" src={logo} alt='Hidden Willows Apartments' />
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  )
}
