import { createContext, useContext, useState } from 'react';
import md5 from "md5";
import axios from "axios";

export const HeroesContext = createContext();

export function HeroesContextProvider({ children }) {
    const [heroDetails, setHeroDetails] = useState({});
    const [getHeroes, setGetHeroes] = useState([]);

    function renderHeroDetails(hero) {
        setHeroDetails(hero);
    }
        
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

    return (
        <HeroesContext.Provider
         value={{
            heroDetails,
            getHeroes,
            renderHeroDetails,
            fetch,
         }}    
        >
            { children }
        </HeroesContext.Provider>
    )

}

export const useDataHero = () => {
    return useContext(HeroesContext)
}