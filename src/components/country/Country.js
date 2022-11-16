import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Country() {
  // const [borderResults, setBorderResults] = useState([]);
  const location = useLocation();
  console.log(location.state);
  const {
    flags: ...location.state.flags ? flags : undefined,
    name: { ...name },
    borders: [...borders],
    region,
    languages: { ...languages },
    capital,
    tld: [...tld],
    population,
    currencies: { ...currencies },
    subregion
  } = { ...location.state };

  // const name = {
  //   common: "Hello"
  // }

  const getBorderCountries = async () => {
    let borderData = [];
    borders.forEach(border => {
      borderData.push(`https://restcountries.com/v3.1/alpha/${border}`);
    })

    console.log(borderData);

    // return Promise.all(borders.map(async borderCountry => {
    //   return await axios.get(`https://restcountries.com/v3.1/alpha/${borderCountry}`).data;
    // }))
  }

  // useEffect(() => {
  //   console.log(getBorderCountries);
  //   // getBorderCountries()
  //   //   .then(res => {
  //   //     setBorderResults([...res])
  //   //   })
  // })

  return (
    <div>
      <img src={flags.svg} alt={`Country flag of ${name.official}`} />
      <div>
        <h2>{name.official}</h2>
        <ul>
          <li>
            Native Name:{" "}
            {
              Object.keys(name.nativeName).map(
                (names) => name.nativeName[names]
              )[0]["common"]
            }
          </li>
          <li>Population: {population.toLocaleString("en-US")}</li>
          <li>Region: {region}</li>
          <li>Sub Region: {subregion}</li>
          <li>Capital: {capital}</li>
        </ul>
        <ul>
          <li>Top Level Domain: {tld[0]}</li>
          <li>
            Currencies:{" "}
            {Object.keys(currencies)
              .map((currency) => currencies[currency])
              .map((currencyType) => currencyType.name)
              .join(", ")}
          </li>
          <li>
            Languages:{" "}
            {Object.keys(languages)
              .map((language) => languages[language])
              .join(", ")}
          </li>
        </ul>
        <div>
          {
            getBorderCountries()
            /* <p>Border Countries: {borders.map(async border => await axios.get(`https://restcountries.com/v3.1/alpha/${border}`).data)}</p> */
          }
        </div>
      </div>
    </div>
  );
}
