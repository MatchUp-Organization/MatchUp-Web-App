import React from "react";
import styles from "./banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContent}>
        <h1>
          <span className={styles.lightText}>Stop wasting time in</span>
          <br />
          <span className={styles.boldText}>searching sport partners</span>
        </h1>
        <button>Get Started</button>
      </div>
      <div className={styles.imageContent}>
        <img src="banner.png" alt="Sport Partners" />
      </div>
    </div>
  );
};

export default Banner;
