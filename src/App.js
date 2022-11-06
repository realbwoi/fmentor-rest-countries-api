import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Country from './components/country/Country';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);

  // Get all country data
  const getAllCountryData = async () => {
    try {
      return await axios.get("https://restcountries.com/v3.1/all");
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    getAllCountryData().then((result) => {
      setAllCountries([...result.data]);
    });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home allCountries={allCountries} />
        </Route>
        <Route path="/:region/:country">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}
