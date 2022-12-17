import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header role="banner">
      <div className='header-wrapper'>
        <Link to='/'>
          <h1>Where in the world?</h1>
        </Link>
        <div>
          <FontAwesomeIcon icon={faMoon} />
          {/* Change to conditional statement */}
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  )
}
