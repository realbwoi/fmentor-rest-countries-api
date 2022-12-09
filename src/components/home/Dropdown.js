import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Dropdown() {
  let history = useHistory();

  const handleRegionChange = (event) => {
    let region = event.target.value;
    history.push(`/${region}`);
  }

  return (
    <select defaultValue={"default"} onChange={handleRegionChange}>
      <option value="default" disabled>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
