import React from "react";
import Favourites from "../components/Favourites";
import { Link } from "react-router-dom";
import * as styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="list">Visit Album</Link>
      </header>
      <Favourites />
    </div>
  );
};

export default Dashboard;
