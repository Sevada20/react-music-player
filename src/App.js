import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/controlPanel/ControlPanel";
import SongList from "./components/songList/SongList";
import MusicUploadForm from "./components/musicUploadForm/MusicUploadForm";
import Modal from "./components/musicUploadForm/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <ControlPanel />
      <SongList />
      <button onClick={openModal} className="addSongButton">
        Add Song
      </button>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <MusicUploadForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
