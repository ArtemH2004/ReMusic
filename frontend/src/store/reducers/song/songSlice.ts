import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongPlayer, SongSettings } from "@/store/reducers/song/types";

function shuffleArray(array: number[]): number[] {
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

const songSlice = createSlice({
  name: "song",
  initialState: {
    songList: [] as number[],
    originalSongList: [] as number[],
    songPlayer: {} as SongPlayer,
    songSettings: {
      isRepeatable: false,
      isShuffled: false,
      isPlaying: false,
      isClose: true,
    } as SongSettings,
  },
  reducers: {
    setSongList(state, action: PayloadAction<number[]>) {
      state.originalSongList = action.payload;

      if (state.songSettings.isShuffled) {
        state.songList = shuffleArray(state.originalSongList);
      } else {
        state.songList = state.originalSongList;
      }
    },
    setSongPlayer(state, action: PayloadAction<SongPlayer>) {
      state.songPlayer = action.payload;
      state.songSettings.isClose = false;
    },
    updateSongPlayer(state, action: PayloadAction<SongPlayer>) {
      state.songPlayer = action.payload;
    },
    clearSongPlayer(state) {
      state.songPlayer = {} as SongPlayer;
      state.songSettings.isClose = true;
      state.songSettings.isPlaying = false;
    },
    setPlaying(state, action: PayloadAction<boolean>) {
      state.songSettings.isPlaying = action.payload;
    },
    updateSongSettingsRepeatable(state, action: PayloadAction<boolean>) {
      state.songSettings.isRepeatable = action.payload;
    },
    updateSongSettingsShuffled(state) {
      state.songSettings.isShuffled = !state.songSettings.isShuffled;

      if (state.songSettings.isShuffled) {
        state.songList = shuffleArray(state.originalSongList);
      } else {
        state.songList = state.originalSongList;
      }
    },
  },
});

export const songActions = songSlice.actions;
export const songReducer = songSlice.reducer;
