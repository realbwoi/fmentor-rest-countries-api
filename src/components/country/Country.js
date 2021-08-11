import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Country() {
  const { country } = useParams();
  const [ countryData, setCountryData ] = useState();
  const [ borderCountryData, setBorderCountryData ] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${country.replace('%20', ' ')}?fullText=true`)
      .then(res => {
        console.log(res.data[0])
        setCountryData(res.data[0])
      })
  }, [country, borderCountryData])

  return (
      !countryData ?

      '' :

      <div>
        <img src={countryData.flag} alt={`Country flag of ${countryData.name}`}/>
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
            <li>Currencies: {
              countryData.currencies.reduce((acc, cur) => {
                acc.push(cur.name)
                return acc
              }, [])
            }</li>
            <li>Languages: {
              countryData.languages.reduce((acc, cur) => {
                acc.push(cur.name)
                return acc
              }, []).join(', ')
            }</li>
          </ul>
          <div>
            <p>Border Countries: 
            </p>
          </div>
        </div>
      </div>
  )
}
