import React from "react";
import { Link} from "react-router-dom";
import { useDataHero } from "../../../context/index";

import styles from "./CharacterDetails.module.scss";

const CharacterDetails = () => {
  const { heroDetails, toggleSearchBool } = useDataHero();

  return (
    Object.keys(heroDetails).length === 11 ?
    <div className={styles.heroDetails}>
      <div className={styles.hero}>
        <h1>{heroDetails.name}</h1>
        <img
          src={
            heroDetails.thumbnail.path + "." + heroDetails.thumbnail.extension
          }
          alt={heroDetails.name}
        />
      </div>
      <div className={styles.details}>
        <h2>
          {heroDetails.description
            ? "Description: " + heroDetails.description
            : "No Description"}
        </h2>

        <div className={styles.events}>
          <br />
          <span  className={styles.category}>Events: </span>
          {heroDetails.events.items.length > 0 ? (
            heroDetails.events.items.map((item, i) =>
              i + 1 !== heroDetails.events.items.length ? (
                <span key={i}>{item.name}, </span>
              ) : (
                <span key={i}>{item.name}. </span>
              )
            )
          ) : (
            <span>No Events</span>
          )}
        </div>
        <div className={styles.series}>
        <br />
          <span className={styles.category}>Series: </span>
          {heroDetails.series.items.length ? (
            heroDetails.series.items.map((serie, i) =>
              i + 1 !== heroDetails.series.items.length ? (
                <span key={i}>{serie.name}, </span>
              ) : (
                <span key={i}>{serie.name}.</span>
              )
            )
          ) : (
            <span>No Series</span>
          )}
        </div>

        <div className={styles.links}>
        <br />
          <span className={styles.category}>Links: </span>
          {heroDetails.urls.map((url, i) => (
            <a key={i} href={url.url}>
              {url.type + " "}
            </a>
          ))}
        </div>
      </div>
    </div>
  
    : <h2 className={styles.backCharacters} >Please select a hero in <Link onClick={() => toggleSearchBool(false)} to='/'>Characters</Link></h2>
  );
};

export default CharacterDetails;
