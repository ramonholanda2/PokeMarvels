import React, { useEffect } from 'react'

import SearchHero from './SearchCategory/SearchHero.jsx';
import Category from './Category/Category';
import Login from '../Login/Login.jsx';

import { useDataHero } from '../../context/index';

import styles from './Characters.module.scss';

const Characters = () => {
    const { user, getCategory, fetch, previousCategory, nextCategory, nextPreviousCategory } = useDataHero();

    useEffect(() => {
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextPreviousCategory])

    return (
        !user ? (
            <Login />
        ) : (
            <div className={styles.heroesComponent}>
                <SearchHero />
                <div className={styles.gridHeroes}>
                    {getCategory.map((category) => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => previousCategory()}>Previous</button>
                    <button onClick={() => nextCategory()}>Next</button>
                </div>
            </div>
        )
    )
}

export default Characters
