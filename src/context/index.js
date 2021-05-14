import { createContext, useContext, useState } from "react";
import md5 from "md5";
import axios from "axios";

export const HeroesContext = createContext();

export function HeroesContextProvider({ children }) {
  const [category, setCategory] = useState('characters');
  const [categoryDetails, setCategoryDetails] = useState({});
  const [getCategory, setGetCategory] = useState([]);
  const [nextPreviousCategory, setNextPreviousCategory] = useState(0);
  const [searchedHero, setSearchedHero] = useState({});
  const [toggleSearch, setToggleSearch] = useState(Boolean);
  const [user, setUser] = useState(null);

  const publicKEY = "3bce82eecb02f4e15c235999ceec8192";
  const privateKEY = "0ca12c2cce0205109716faead74057990f89315a";
  const time = Number(new Date());
  const hash = md5(time + privateKEY + publicKEY);

  function getUser(user) {
    setUser(user);
  }

  function selectCategory(option) {
    setCategory(option);
  }
  
  async function fetch() {
    const { data } = await axios.get(
      `http://gateway.marvel.com/v1/public/${category}?limit=12&offset=${nextPreviousCategory}&ts=${time}&apikey=${publicKEY}&hash=${hash}`
      );

      console.log(data.data.results)
      setGetCategory(data.data.results);
    }

  const fetchHeroSearch = async(hero) => {
    const {data} = await axios.get(`http://gateway.marvel.com/v1/public/characters/${hero}?ts=${time}&apikey=${publicKEY}&hash=${hash}`);

    const result = data.data.results[0]

    setSearchedHero(result);
    
    if(Object.keys(result).length){
      renderCategoryDetails(result);
    } 
  }

  const toggleSearchBool = (bool) => {
    setToggleSearch(bool);
    selectCategory("characters");
  }

  function nextCategory() {
    setNextPreviousCategory(nextPreviousCategory + 12);
  }

  function previousCategory() {
    if(nextPreviousCategory > 0) setNextPreviousCategory(nextPreviousCategory - 12);
  }

  function renderCategoryDetails(hero) {
    setCategoryDetails(hero);
  }

  return (
    <HeroesContext.Provider
      value={{
        //heroDetails,
        categoryDetails,
        //getHeroes,
        getCategory,
        nextPreviousCategory,
        searchedHero,
        toggleSearch,
        category,
        user,
        getUser,
        //renderHeroDetails,
        renderCategoryDetails,
        fetch,
        //nextHeroes,
        nextCategory,
        //previousHeroes,
        previousCategory,
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
