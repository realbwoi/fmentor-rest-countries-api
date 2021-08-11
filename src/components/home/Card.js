import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ country }) {
  const { flag, name, population, region, capital } = country;

  return (
    <Link to={`/${region}/${name}`}>
      <img src={flag} alt={`Country flag of ${name}`}/>
      <h2>{name}</h2>
      <p><span>Population: </span>{population.toLocaleString("en-US")}</p>
      <p><span>Region: </span>{region}</p>
      <p><span>Capital: </span>{capital}</p>
    </Link>
  )
}
