import styles from "./songRow.module.css";
import { IoMdPlay, IoMdArrowDropdown, IoIosCheckmark } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteSong } from "./../../redux/slices/songSlice/songSlice";
import { useState } from "react";
import { IoIosPause } from "react-icons/io";

const SongRow = ({ song, handleToggleAudio, currentTrack, isPlaying }) => {
  const dispatch = useDispatch();
  const [likedStatus, setLikedStatus] = useState(false);

  const handleLikeButtonClick = () => {
    setLikedStatus(!likedStatus);
  };

  const deleteSongItem = () => {
    dispatch(deleteSong(song.id));
  };

  const isCurrentTrack = currentTrack?.id === song?.id;

  return (
    <tr className={styles.songRow}>
      <td className={styles.songName}>
        {isCurrentTrack && isPlaying ? (
          <IoIosPause onClick={() => handleToggleAudio(song)} />
        ) : (
          <IoMdPlay onClick={() => handleToggleAudio(song)} />
        )}
      </td>
      <td className={styles.songName}>{song.title}</td>
      <td className={styles.artistName}>{song.artists}</td>
      <td className={styles.trackNumber}>{song.id}</td>
      <td className={styles.trackNumber}>
        <FaHeart
          className={likedStatus ? styles.liked : ""}
          onClick={handleLikeButtonClick}
        />
        <IoIosCheckmark />
        <IoArrowRedoSharp />
        <IoMdArrowDropdown />
        <MdDeleteForever onClick={deleteSongItem} />
      </td>
    </tr>
  );
};

export default SongRow;
