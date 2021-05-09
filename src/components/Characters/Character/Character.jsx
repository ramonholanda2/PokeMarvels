import React from 'react'

import styles from './Character.module.scss';
import { Link } from 'react-router-dom';
import { useDataHero } from '../../../context/index';

const Character = ({ hero }) => {
    const { renderHeroDetails } = useDataHero();

    return (
        <div className={styles.heroCard}>
            <div>
                <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name}/>
                <h1>{hero?.name}</h1>
                <h1>{hero?.title}</h1>
            </div>
            <Link to='/CharacterDetails'>
                <button onClick={() => renderHeroDetails(hero)} >Details</button>
            </Link>
        </div>
    )
}

export default Character
