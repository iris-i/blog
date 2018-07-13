import React from 'react'
import { Link } from 'gatsby'

import './_header.scss';
import logo from './iris-logo.png';

const Header = ({ siteTitle }) => (
  <header role = "banner" className = "header">
    <div className = "header__inner">
      <h1 className = "header__logo">
        <Link to="/"><img alt = { siteTitle } src = { logo } /></Link>
      </h1>
    </div>
  </header>
)

export default Header
