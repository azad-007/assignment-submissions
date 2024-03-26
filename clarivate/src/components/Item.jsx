import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../store/ListSlice";
import * as styles from "./Item.module.scss";
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const addFavoriteHandler = () => {
    dispatch(addToFavorite(item.id));
  };
  const removeFavoriteHandler = () => {
    dispatch(removeFromFavorite(item.id));
  };
  return (
    <Card className={styles.cardContainer}>
      <Card.Img
        className={styles.cardImg}
        variant="top"
        src={item.thumbnailUrl}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title>
          <strong>Title: </strong> {item.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          <strong>Id: </strong>
          {item.id}
        </Card.Text>
        {!item.isFavorite && (
          <Button
            className={styles.cardBtn}
            variant="primary"
            onClick={addFavoriteHandler}
          >
            Add to Favorite
          </Button>
        )}
        {item.isFavorite && (
          <Button
            className={styles.cardBtn}
            variant="primary"
            onClick={removeFavoriteHandler}
          >
            Remove from Favorite
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
export default Item;
