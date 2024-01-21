import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import songList from "../../../assets/tracksList";

export const fetchSongs = createAsyncThunk("song/fetchSongs", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return songList;
});

export const uploadSong = createAsyncThunk(
  "song/uploadSong",
  async ({ newSongUrl, title, artists }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newSong = {
      id: songList.length + 1,
      src: newSongUrl,
      title: title,
      artists: artists,
    };
    return newSong;
  }
);

export const deleteSong = createAsyncThunk(
  "song/deleteSong",
  async (songId, { getState }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const currentState = getState();
    const updatedSongs = currentState.song.songs.filter(
      (song) => song.id !== songId
    );
    return updatedSongs;
  }
);

const initialState = {
  songs: [],
  loading: "idle",
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(uploadSong.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(uploadSong.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.songs.push(action.payload);
      })
      .addCase(uploadSong.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteSong.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.songs = action.payload;
      })
      .addCase(deleteSong.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default songSlice.reducer;
