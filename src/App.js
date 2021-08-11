import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Country from './components/Country'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:region/:country">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
