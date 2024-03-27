import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import * as styles from "./Favourites.module.scss";
const Favourites = () => {
  const { listData } = useSelector((state) => state.list);
  const favList = listData.filter((item) => item.isFavorite);
  console.log(listData);
  return (
    <div className={styles.favoriteContainer}>
      {favList.length === 0 && (
        <h1 style={{ color: "cornflowerblue" }}>
          Visit Album to Add album photos to your favorite...
        </h1>
      )}
      {favList.length !== 0 &&
        favList.map((favorite) => <Item key={favorite.id} item={favorite} />)}
    </div>
  );
};

export default Favourites;
