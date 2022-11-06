import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({
  region,
  name: { ...name },
  flags: { ...flags },
  currencies,
  languages,
  population,
  capital,
  subregion,
  tld,
}) {
  return (
    <Link
      to={{
        pathname: `/${region}/${name.common}`,
        state: {
          region: region,
          name: { ...name },
          flags: { ...flags },
          population: population,
          capital: capital,
          subregion: subregion,
          tld: tld,
          currencies: { ...currencies },
          languages: { ...languages },
        },
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
