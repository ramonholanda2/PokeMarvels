import React from 'react';

import styles from './Login.module.scss';
import { auth, provider } from '../../firebase';
import { useDataHero } from "../../context/index";

const Login = () => {
  const { getUser } = useDataHero();
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
          getUser(result.user);
      })
      .catch(error => console.error(error));
    }
    return (
        <div className={styles.login}>
            <img src='/images/marvel.svg' alt="Marvel logo" />
            <h3>PokeMarvels</h3>
            <button onClick={() => signIn()}>Login</button>
        </div>
    )
}

export default Login
