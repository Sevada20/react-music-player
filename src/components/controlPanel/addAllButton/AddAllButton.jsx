import React from "react";
import styles from "./AddAllButton.module.css";
import { IoMdPlay } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const AddAllButton = () => {
  return (
    <div className={styles.AddAllButtonContainer}>
      <button className={styles.firstAddButton}>
        <FaPlus className={styles.firstAddIcon} />
        Add All
        <IoMdPlay className={styles.secondAddIcon} />
      </button>
    </div>
  );
};

export default AddAllButton;
