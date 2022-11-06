import React from 'react'

export default function Dropdown() {
  return (
    <select defaultValue={"default"}>
      <option value="default" disabled>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
