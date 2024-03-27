import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import * as styles from "./Favourites.module.scss";
const Favourites = () => {
  const { listData } = useSelector((state) => state.list);
  return (
    <div className={styles.favoriteContainer}>
      {listData
        .filter((item) => item.isFavorite)
        .map((favorite) => (
          <Item key={favorite.id} item={favorite} />
        ))}
    </div>
  );
};

export default Favourites;
