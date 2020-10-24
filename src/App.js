import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NotMatch from './Components/NoMatch/NotMatch';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
         <Home />
       </Route>
       <Route path="/country/:countryName">
         <CountryDetails></CountryDetails>
       </Route>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="*">
         <NotMatch />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
