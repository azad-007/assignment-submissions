import React, { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUpdateList, updatePage } from "../store/ListSlice";
import Item from "../components/Item";
import * as styles from "./AlbumList.module.scss";
let initialLoad = true;
const AlbumList = () => {
  const [loadMore, setLoadmore] = useState(true);
  const { page, listData } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${currentPage}&_limit=10`
      );
      const newData = await response.json();
      dispatch(updatePage(currentPage + 1));
      if (newData && newData.length > 0) {
        dispatch(addUpdateList(newData));
      } else {
        setLoadmore(false);
      }
    };

    if (initialLoad && loadMore) {
      initialLoad = false;
      fetchData();
    }
  }, [currentPage, loadMore]);

  const onScroll = async () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setCurrentPage((prev) => prev + 1);
      initialLoad = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Link className={styles.header} to="/">
        Back
      </Link>
      {initialLoad && (
        <div className={styles.lds_circle}>
          <div>Loading...</div>
        </div>
      )}
      <div className={styles.listContainer}>
        {listData.map((albumItem) => (
          <Item key={albumItem.id} item={albumItem} />
        ))}
      </div>
    </div>
  );
};

export default memo(AlbumList);
