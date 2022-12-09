import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Country({country}) {
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState();
  const [borderData, setBorderData] = useState();

  const fetchBorderData = () => {
    if (Object.keys(country).length === 0) {
      return;
    } else {
      fetch(`https://restcountries.com/v2/alpha?codes=${country.borders.join(",")}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setBorderData(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
    // console.log(`Border info: ${JSON.stringify(borderData)}`);
  }

  const setCountryDataFromProps = () => {
    // console.log(countryData);
    if (Object.keys(country).length === 0) {
      return <><p>Loading...</p></>;
    }
    setCountryData(country);
    fetchBorderData();
    console.log("DATA LOADED");
  }

  useEffect(() => {
    setCountryDataFromProps();
  }, [country]);

  return (
    !isLoading ?
    <>
      <p>Loading...</p>
    </> :
    <div>
      <img
        src={countryData?.flag}
        alt={`Country flag of ${countryData?.name}`}
      />
      <div>
        <h2>{countryData?.name}</h2>
        <ul>
          <li>Native Name: {countryData?.nativeName}</li>
          <li>Population: {countryData?.population}</li>
          <li>Region: {countryData?.region}</li>
          <li>Sub Region: {countryData?.subregion}</li>
          <li>Capital: {countryData?.capital}</li>
        </ul>
        <ul>
          <li>
            Top Level Domain: {countryData?.topLevelDomain[0]}
          </li>
          <li>
            Currencies:
            {countryData?.currencies
              .map((currency) => currency.name)
              .join(", ")}
          </li>
          <li>
            Languages:{" "}
            {countryData?.languages.map((language) => language.name).join(", ")}
          </li>
        </ul>
        <div>Border Countries: {
            typeof borderData == "undefined" ? <p>Loading...</p> : borderData.map(border => {
              return (
                <Link
                  key={border.alpha3Code}
                  to={{
                   pathname: `/${border.region}/${border.alpha3Code}`
                  }}
                  className="border-link"
                >
                  {border.name}
                </Link>
                );
            })
          }
        </div>
      </div>
    </div>
  );
}
