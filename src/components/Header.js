import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
  return (
    <header role="banner">
      <h1>Where in the world?</h1>
      <div>
        <FontAwesomeIcon icon={faMoon} />
        {/* Change to conditional statement */}
        <span>Dark Mode</span>
      </div>
    </header>
  )
}
