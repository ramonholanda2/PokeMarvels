import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HeroesContextProvider } from "./context/index";

import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import CategoryDetails from './components/Categories/CategoryDetails/CategoryDetails.jsx';

import "./App.css";

const App = () => {

  return (
    <Router>
        <Switch>
        <HeroesContextProvider>
          <Header />
          <Route exact path='/'>
           <Categories />
          </Route>
          <Route path='/CategoryDetails'>
            <CategoryDetails />
          </Route>
        </HeroesContextProvider>
        </Switch>
      </Router>
  );
};

export default App;
