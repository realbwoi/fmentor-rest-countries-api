import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Dropdown from './Dropdown';
import Card from './Card';

export default function Home() {
  const [ allCountryData, setAllCountryData ] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        console.log(res.data);
        setAllCountryData(res.data);
      })
  }, [])

  return (
    <div>
      <div>
        <Search />
        <Dropdown />
      </div>
      {allCountryData.map((country, idx) => {
        return (
          <>
            <Card key={idx} country={country} />
          </>
        )
      })}
    </div>
  )
}
