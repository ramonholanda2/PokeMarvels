import React from "react";
import { Link} from "react-router-dom";
import { useDataHero } from "../../../context/index";

import styles from "./CharacterDetails.module.scss";

const CharacterDetails = () => {
  const { categoryDetails, toggleSearchBool } = useDataHero();

  return (
    Object.keys(categoryDetails).length  ?
    <div className={styles.categoryDetails}>
      <div className={styles.hero}>
        <h1>{categoryDetails.name}</h1>
        <h1>{categoryDetails?.title}</h1>
         <img
          src={
            categoryDetails.thumbnail.path + "." + categoryDetails.thumbnail.extension
          }
          alt={categoryDetails.name}
        />
      </div>
      <div className={styles.details}>
        <h2>
          {categoryDetails.description
            ? "Description: " + categoryDetails.description
            : "No Description"}
        </h2>

        <div className={styles.events}>
          <br />
          <span  className={styles.category}>Events: </span>
          {categoryDetails?.events?.items.length > 0 ? (
            categoryDetails.events.items.map((item, i) =>
            i + 1 !== categoryDetails.events.items.length ? (
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
          {categoryDetails?.series?.items.length ? (
            categoryDetails.series.items.map((serie, i) =>
            i + 1 !== categoryDetails.series.items.length ? (
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
          {categoryDetails.urls.map((url, i) => (
            <a key={i} target='#' href={url.url}>
              {url.type + " "}
            </a>
          ))}
        </div> 
          {/* 
          */}
      </div>
    </div>
  
    : <h2 className={styles.backCharacters} >Please select a hero in <Link onClick={() => toggleSearchBool(false)} to='/'>Characters</Link></h2>
  );
};

export default CharacterDetails;
