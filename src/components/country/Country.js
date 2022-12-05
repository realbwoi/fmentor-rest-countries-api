import React, { useState, useEffect } from 'react';

export default function Country({country}) {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState();
  const [borderData, setBorderData] = useState([]);

  const setCountryDataFromProps = () => {
    console.log(countryData);
    if (Object.keys(country).length === 0) return <><p>Loading...</p></>
    setCountryData(country);
    setIsLoading((prevState) => !prevState);
    console.log("PROPS: " + JSON.stringify(country));
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
        <div>Border Countries: {borderData && borderData.join(", ")}</div>
      </div>
    </div>
  );
}
