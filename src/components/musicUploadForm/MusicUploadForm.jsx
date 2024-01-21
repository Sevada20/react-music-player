import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadSong } from "../../redux/slices/songSlice/songSlice";
import styles from "./MusicUploadForm.module.css";

const MusicUploadForm = () => {
  const dispatch = useDispatch();
  const [newSongUrl, setNewSongUrl] = useState("");
  const [newSongName, setNewSongName] = useState("");
  const [newArtistName, setNewArtistName] = useState("");

  const handleSongUpload = ({ closeModal }) => {
    if (
      newSongUrl.trim() === "" ||
      newSongName.trim() === "" ||
      newArtistName.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    dispatch(
      uploadSong({
        newSongUrl,
        title: newSongName,
        artists: newArtistName,
      })
    );

    setNewSongUrl("");
    setNewSongName("");
    setNewArtistName("");

    closeModal();
  };

  return (
    <div className={styles.musicUploadForm}>
      <label htmlFor="songUrl">Enter Song URL:</label>
      <input
        type="text"
        id="songUrl"
        value={newSongUrl}
        onChange={(e) => setNewSongUrl(e.target.value)}
        className={styles.inputField}
      />
      <label htmlFor="songName">Enter Song Name:</label>
      <input
        type="text"
        id="songName"
        value={newSongName}
        onChange={(e) => setNewSongName(e.target.value)}
        className={styles.inputField}
      />
      <label htmlFor="artistName">Enter Artist Name:</label>
      <input
        type="text"
        id="artistName"
        value={newArtistName}
        onChange={(e) => setNewArtistName(e.target.value)}
        className={styles.inputField}
      />
      <button onClick={handleSongUpload} className={styles.uploadButton}>
        Upload Song
      </button>
    </div>
  );
};

export default MusicUploadForm;
