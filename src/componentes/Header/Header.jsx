import React from 'react'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import {ImSearch } from 'react-icons/im';

function Header() {
  return (
      <nav className='header'>
          <img src={logo} alt='logo' />
          <div className=''>
              <Link to="/tvshows">TV Shows</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/recent">Recently Added</Link>
              <Link to="/myList">My List</Link>
          </div>
          <ImSearch/>
    </nav>
  )
}

export default Header