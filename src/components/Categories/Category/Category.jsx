import React from 'react'

import styles from './Character.module.scss';
import { Link } from 'react-router-dom';
import { useDataHero } from '../../../context/index';

const Category = ({ category }) => {
    const { renderCategoryDetails } = useDataHero();

    return (
        <div className={styles.heroCard}>
            <div>
                <img src={category.thumbnail.path + '.' + category.thumbnail.extension} alt={category.name}/>
                <h1>{category?.name}</h1>
                <h1>{category?.title}</h1>
            </div>
            <Link to='/CategoryDetails'>
                <button onClick={() => renderCategoryDetails(category)} >Details</button>
            </Link>
        </div>
    )
}

export default Category;
