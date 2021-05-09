import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeroesContextProvider } from "./context/index";

import Header from "./components/Header/Header.jsx";
import Characters from "./components/Characters/Characters.jsx";
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails.jsx';

import "./App.css";

const App = () => {

  return (
    <Router>
        <Switch>
        <HeroesContextProvider>
          <Header />
          <Route exact path='/'>
           <Characters />
          </Route>
          <Route path='/CharacterDetails'>
            <CharacterDetails />
          </Route>
        </HeroesContextProvider>
        </Switch>
      </Router>
  );
};

export default App;
