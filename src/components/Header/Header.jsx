import React from "react";

import { useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import {Link} from 'react-router-dom';

import styles from "./Header.module.scss";

const Header = () => {
  let location = useLocation();
  
  return (
    <header className={styles.appHeader}>
        {location.pathname === "/CharacterDetails" ? (
          <Link to='/'>
            <button><IoMdArrowRoundBack size='2rem'/></button>
          </Link>
        ) : (
          "jose"
        )}
      <ul>
        <li>Characters</li>
        <li>Events</li>
        <li>Libraries</li>
      </ul>
    </header>
  );
};

export default Header;
