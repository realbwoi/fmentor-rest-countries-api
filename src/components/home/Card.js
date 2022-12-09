import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({
  country
}) {
  const { name, flags, population, region, capital, alpha3Code } = country;

  return (
    <Link
      to={{
        pathname: `/${region}/${alpha3Code}`,
      }}
    >
      <img src={flags.svg} alt={`Country flag of ${name}`} />
      <h2>{name}</h2>
      <p>
        <span>Population: </span>
        {population}
      </p>
      <p>
        <span>Region: </span>
        {region}
      </p>
      <p>
        <span>Capital: </span>
        {capital}
      </p>
    </Link>
  );
}
