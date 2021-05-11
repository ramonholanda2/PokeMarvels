import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import {Link} from 'react-router-dom';

import styles from "./Header.module.scss";
import { useDataHero } from "../../context/index";

const Header = () => {
  const { selectCategory, category, fetch } = useDataHero();
  let location = useLocation();

  useEffect(() => {
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])
  
  return (
    <header className={styles.appHeader}>
        {location.pathname === "/CharacterDetails" ? (
          <Link to='/'>
            <button><IoMdArrowRoundBack size='2rem' /></button>
          </Link>
        ) : (
          <Link to='/'>
            <img src='/images/marvel.svg' alt="Marvel logo" />
          </Link>
        )}
      <ul>
        
        <Link to='/'>
          <li onClick={() => selectCategory('characters')}>Characters</li>
        </Link>
        <Link to='/'>
          <li onClick={() => selectCategory('events')}>Events</li>
        </Link>
        <Link to='/'>
          <li onClick={() => selectCategory('series')}>Series</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
