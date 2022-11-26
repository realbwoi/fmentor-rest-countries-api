import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

export default function Country({country}) {
  const [borderData, setBorderData] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (Object.keys(country).length === 0) {
      if (localStorage.getItem('allCountries') == null) {
        const countryName = location.pathname.split("/")[2];
        axios.get(`https://restcountries.com/v2/name/${countryName}`)
          .then(result => {
            setCountryData(result.data);
            setLoading(true);
          },
          error => {
            console.log(error);
          })
      } else {

      }
    } else {
      setCountryData(country);
      setLoading(true);
    }
  }, []);

  return !loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <img src={countryData.flag} alt={`Country flag of ${countryData.name}`} />
      <div>
        <h2>{countryData.name}</h2>
        <ul>
          <li>Native Name: {countryData.nativeName}</li>
          <li>Population: {countryData.population}</li>
          <li>Region: {countryData.region}</li>
          <li>Sub Region: {countryData.subregion}</li>
          <li>Capital: {countryData.capital}</li>
        </ul>
        <ul>
          <li>Top Level Domain: {countryData?.topLevelDomain[0]}</li>
          <li>
            Currencies:
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
