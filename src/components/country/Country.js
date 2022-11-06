import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Country() {
  const location = useLocation();
  const countryData = location.state;

  return (
    <div>
      {console.log(location)}
      <img
        src={countryData.flags.svg}
        alt={`Country flag of ${countryData.name.official}`}
      />
      <div>
        <h2>{countryData.name.official}</h2>
        <ul>
          <li>Native Name: {countryData.name.nativeName}</li>
          <li>Population: {countryData.population.toLocaleString("en-US")}</li>
          <li>Region: {countryData.region}</li>
          <li>Sub Region: {countryData.subregion}</li>
          <li>Capital: {countryData.capital}</li>
        </ul>
        <ul>
          <li>Top Level Domain: {countryData.tld[0]}</li>
          <li>
            Currencies:{" "}
            {countryData.currencies}
          </li>
          <li>
            Languages:{" "}
            {countryData.languages}
          </li>
        </ul>
        <div>
          <p>Border Countries:</p>
        </div>
      </div>
    </div>
  );
}
