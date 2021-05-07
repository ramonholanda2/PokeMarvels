import React from "react";
import { useDataHero } from "../../../context/index";

import styles from "./CharacterDetails.module.scss";

const CharacterDetails = () => {
  const { heroDetails } = useDataHero();

  return (
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
            ? "Descrição: " + heroDetails.description
            : ""}
        </h2>

        <span>Events: </span>
        {heroDetails.events.items.length > 0 ? (
          heroDetails.events.items.map((item, i) => (
            <span key={i}>{item.name}</span>
          ))
        ) : (
          <span>No Events</span>
        )}

        {heroDetails.urls.map((url) => (
          <a href={url.url}>{url.type}</a>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;
