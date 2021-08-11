import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [ allCountryData, setAllCountryData ] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {setAllCountryData(res.data)})
  }, [])

  return (
    <div>
      This is the Home page!
      {allCountryData.map((country, idx) => {
        return (
          <div key={idx}>
            {country.name}
          </div>
        )
      })}
    </div>
  )
}
