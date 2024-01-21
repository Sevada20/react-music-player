import { useDispatch, useSelector } from "react-redux";
import SongRow from "../songRow/SongRow";
import styles from "./SongList.module.css";
import { useEffect, useState } from "react";
import { fetchSongs } from "../../redux/slices/songSlice/songSlice";
import songList from "../../assets/tracksList";

const audio = new Audio(songList[0]?.src);
const SongList = () => {
  const { songs } = useSelector((state) => state.song);
  const dispatch = useDispatch();

  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    dispatch(fetchSongs());
  }, []);

  const handleToggleAudio = (track) => {
    if (currentTrack?.id !== track.id) {
      setCurrentTrack(track);
      setPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();

      return;
    }
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <table className={styles.songRootTableContainer}>
      <thead className={styles.tableHeadContainer}>
        <tr className={styles.tableHeaderContainer}>
          <th className={styles.tableHeader}></th>
          <th className={styles.tableHeader}>Song Name</th>
          <th className={styles.tableHeader}>Artist Name</th>
          <th className={styles.tableHeader}>Track</th>
          <th className={styles.tableHeader}></th>
        </tr>
      </thead>
      <tbody className={styles.tableBodyContainer}>
        {songs.map((song) => (
          <SongRow
            key={song.id}
            song={song}
            handleToggleAudio={handleToggleAudio}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
