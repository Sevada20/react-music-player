import React from "react";
import styles from "./PlayAllButton.module.css";
import { IoMdPlay } from "react-icons/io";

const PlayAllButton = () => {
  return (
    <div className={styles.playAllButtonContainer}>
      <button className={styles.firstPlayButton}>
        <IoMdPlay className={styles.firstPlayIcon} />
        Play All
        <IoMdPlay className={styles.secondPlayIcon} />
      </button>
    </div>
  );
};

export default PlayAllButton;
