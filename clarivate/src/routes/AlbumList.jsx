import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUpdateList } from "../store/ListSlice";
import Item from "../components/Item";
import * as styles from "./AlbumList.module.scss";
let initialLoad = true;
const AlbumList = () => {
  const [loadMore, setLoadmore] = useState(true);
  const albumData = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  console.log(albumData);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${currentPage}&_limit=10`
      );
      const newData = await response.json();
      if (newData && newData.length > 0) {
        dispatch(addUpdateList(newData));
      } else {
        setLoadmore(false);
      }

      //   setLoading(false);
    };

    if (initialLoad && loadMore) {
      //   setLoading(true);
      initialLoad = false;
      fetchData();
    }
    //  else if (!initialLoad && currentPage.prev != currentPage.curr) {
    //   fetchData();
    // }
  }, [currentPage]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      //   setLoading(true);
      const pageNo = Math.ceil(albumData.length / 10);
      console.log(albumData);
      setCurrentPage((prev) => prev + 1);
      initialLoad = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <Link className={styles.header} to="/">
        Back
      </Link>
      {/* {loading && <p>Please wait while we fetch your data.</p>} */}
      <div className={styles.listContainer}>
        {albumData.map((albumItem) => (
          <Item key={albumItem.id} item={albumItem} />
        ))}
      </div>
    </div>
  );
};

export default memo(AlbumList);
