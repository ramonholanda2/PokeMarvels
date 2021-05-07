import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import md5 from "md5";
import axios from "axios";

import { HeroesContextProvider } from "./context/index";

import Header from "./components/Header/Header.jsx";
import Characters from "./components/Characters/Characters.jsx";
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails.jsx';

import "./App.css";

const App = () => {
 /*  const [getHeroes, setGetHeroes] = useState([]);

  async function fetch() {
    const publicKEY = "87fa0016c6af282d2b76bc952180cb23";
    const privateKEY = "3b20eeafd6247347cbbaaa97b990e8d5f9de7eea";

    const time = Number(new Date());

    const hash = md5(time + privateKEY + publicKEY);

    const { data } = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?limit=12&offset=0&ts=${time}&apikey=${publicKEY}&hash=${hash}`
    );

    setGetHeroes(data.data.results);
    console.log(data.data.results);
  }

  useEffect(() => {
    fetch();
  }, []); */

  return (
    <Router>
        <Switch>
        <HeroesContextProvider>
          <Header />
          <Route exact path='/'>
           <Characters /* getHeroes={getHeroes} */ />
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
