import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import styles from './SearchHero.module.scss';

import { useDataHero } from "../../../context/index";

const SearchHero = () => {
    const [input, setInput] = useState('');
    const { fetchHeroSearch, searchedHero} = useDataHero();
    const hero = Object.keys(searchedHero).length;

    return (
        <div className={styles.search}>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Search Hero by ID'/>

            {hero ? (
                <Link to='/CharacterDetails' >
                    <button>Get</button>
                </Link>
            ) : (
                <button onClick={() => fetchHeroSearch(input)}>Generate Hero</button>
            )}
            
        </div>
    )
}

export default SearchHero;
