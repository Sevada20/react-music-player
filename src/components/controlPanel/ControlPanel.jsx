import React from "react";
import PlayAllButton from "./playAllButton/PlayAllButton";
import AddAllButton from "./addAllButton/AddAllButton";
import styles from "./ControlPanel.module.css";
import { IoMdPlay } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";

const ControlPanel = () => {
  return (
    <div className={styles.musicControlPanel}>
      <div className={styles.leftControls}>
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className={styles.rightControls}>
        <div className={styles.trackButtonContainer}>
          <button className={styles.trackButton}>
            <BiSortAlt2 className={styles.sortFirstIcon} />
            Track Nu...
            <IoMdPlay className={styles.secondSortIcon} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Filter"
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
