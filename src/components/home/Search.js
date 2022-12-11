import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search({handleSearch}) {

  return (
    <div>
      <FontAwesomeIcon icon={faSearch} />
      <input placeholder="Search for a country..." onChange={handleSearch} />
    </div>
  )
}
