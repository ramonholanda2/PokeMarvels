import React, { useEffect } from 'react'

import SearchHero from './SearchHero/SearchHero.jsx';
import Character from './Character/Character.jsx';

import { useDataHero } from '../../context/index';

import styles from './Characters.module.scss';

const Characters = () => {
    const { getHeroes, fetch } = useDataHero();
    
    useEffect(() => {
        fetch();
    }, [])


    return (
        <div className={styles.heroesComponent}>
            <SearchHero />
            <div className={styles.gridHeroes}>
                {getHeroes.map((hero) => (
                    <Character key={hero.id} hero={hero} />
                ))}
            </div>
        </div>
    )
}

export default Characters
