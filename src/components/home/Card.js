import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({
  country
}) {
  const {region,
  name: { ...name },
  flags: { ...flags },
  population,
  capital} = {...country};

  return (
    <Link
      to={{
        pathname: `/${region}/${name.common}`,
        state: {...country},
      }}
    >
      <img src={flags.svg} alt={`Country flag of ${name.common}`} />
      <h2>{name.common}</h2>
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
