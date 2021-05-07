import React from 'react'

import styles from './SearchHero.module.scss';

const SearchHero = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder='Search Hero'/>
            <button>Search</button>
        </div>
    )
}

export default SearchHero
