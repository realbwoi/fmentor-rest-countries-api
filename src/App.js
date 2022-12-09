import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Country from './components/country/Country';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('allCountries') == null) {
      fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => {
          setAllCountries(data);
          localStorage.setItem("allCountries", JSON.stringify(data));
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setAllCountries(JSON.parse(localStorage.getItem('allCountries')));
    }
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home allCountries={allCountries} />
        </Route>
        <Route path="/:region" render={(props) => {
          return <Home allCountries={allCountries.filter(country => {
            return country.region === props.match.params.region
          })} />
        }} />
        <Route path="/:region/:alpha3Code" render={(props) => {
          return (
            <Country country={{...allCountries.filter(country => {
              return country.alpha3Code === props.match.params.alpha3Code;
            })[0]}} />
          )
        }} />
      </Switch>
    </Router>
  );
}
