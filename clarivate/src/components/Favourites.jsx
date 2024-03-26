import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import * as styles from "./Favourites.module.scss";
const Favourites = () => {
  const favouriteData = useSelector((state) => state.list);
  return (
    <div className={styles.favoriteContainer}>
      {favouriteData
        .filter((item) => item.isFavorite)
        .map((favorite) => (
          <Item key={favorite.id} item={favorite} />
        ))}
    </div>
  );
};

export default Favourites;
