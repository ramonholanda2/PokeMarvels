import { createContext, useContext, useState } from "react";
import md5 from "md5";
import axios from "axios";

export const HeroesContext = createContext();

export function HeroesContextProvider({ children }) {
  const [category, setCategory] = useState('characters');
  const [heroDetails, setHeroDetails] = useState({});
  const [getHeroes, setGetHeroes] = useState([]);
  const [nextPreviousHeroes, setNextPreviousHeroes] = useState(0);
  const [searchedHero, setSearchedHero] = useState({});
  const [toggleSearch, setToggleSearch] = useState(Boolean);

  const publicKEY = "3bce82eecb02f4e15c235999ceec8192";
  const privateKEY = "0ca12c2cce0205109716faead74057990f89315a";
  const time = Number(new Date());
  const hash = md5(time + privateKEY + publicKEY);

  function selectCategory(option) {
    setCategory(option);
  }
  
  async function fetch() {
    const { data } = await axios.get(
      `http://gateway.marvel.com/v1/public/${category}?limit=12&offset=${nextPreviousHeroes}&ts=${time}&apikey=${publicKEY}&hash=${hash}`
      );
      
      setGetHeroes(data.data.results);
    }

  const fetchHeroSearch = async(hero) => {
    const {data} = await axios.get(`http://gateway.marvel.com/v1/public/characters/${hero}?ts=${time}&apikey=${publicKEY}&hash=${hash}`);

    const result = data.data.results[0]

    setSearchedHero(result);
    
    if(Object.keys(result).length){
      renderHeroDetails(result);
    } 
  }

  const toggleSearchBool = (bool) => {
    setToggleSearch(bool);
    selectCategory("characters");
  }

  function nextHeroes() {
    setNextPreviousHeroes(nextPreviousHeroes + 12);
  }

  function previousHeroes() {
    if(nextPreviousHeroes > 0) setNextPreviousHeroes(nextPreviousHeroes - 12);
  }

  function renderHeroDetails(hero) {
    setHeroDetails(hero);
  }

  return (
    <HeroesContext.Provider
      value={{
        heroDetails,
        getHeroes,
        nextPreviousHeroes,
        searchedHero,
        toggleSearch,
        category,
        renderHeroDetails,
        fetch,
        nextHeroes,
        previousHeroes,
        fetchHeroSearch,
        toggleSearchBool,
        selectCategory
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
}

export const useDataHero = () => {
  return useContext(HeroesContext);
};
