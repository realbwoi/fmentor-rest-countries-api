import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

export default function Country({country}) {
  const [borderData, setBorderData] = useState([]);
  const [countryData, setCountryData] = useState();
  const location = useLocation();

  useEffect(() => {
    const fetchCountry = () => {
      if (!country.length) {
        axios
          .get(
            `https://restcountries.com/v2/name/${
              location.pathname.split("/")[2]
            }`
          )
          .then((result) => {
            setCountryData(result.data[0]);
          });
      } else {
        setCountryData({ ...country });
      }
    };

    async function getBorderData() {
      if (countryData === undefined) return;
      const borderNames = await Promise.all(
        countryData.borders.map((border) => {
          return axios.get(
            `https://restcountries.com/v2/alpha?codes=${border}`
          );
        })
      );

      setBorderData(borderNames.map(({ data }) => data[0].name));
    }

    fetchCountry();
    getBorderData();
  }, []);

  return !countryData ? (<p>Loading...</p>) : (
    <div>
      <img
        src={countryData.flags.svg}
        alt={`Country flag of ${countryData.name}`}
      />
      <div>
        <h2>{countryData.name}</h2>
        <ul>
          <li>Native Name: {countryData.nativeName}</li>
          <li>Population: {countryData.population.toLocaleString("en-US")}</li>
          <li>Region: {countryData.region}</li>
          <li>Sub Region: {countryData.subregion}</li>
          <li>Capital: {countryData.capital}</li>
        </ul>
        <ul>
          <li>Top Level Domain: {countryData.topLevelDomain[0]}</li>
          <li>
            Currencies:{" "}
            {countryData.currencies.map((currency) => currency.name).join(", ")}
          </li>
          <li>
            Languages:{" "}
            {countryData.languages.map((language) => language.name).join(", ")}
          </li>
        </ul>
        <div>Border Countries: {borderData.join(", ")}</div>
      </div>
    </div>
  );
}
