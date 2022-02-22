import { createSlice } from '@reduxjs/toolkit';
import { clear } from './global';


const initialState: UIState = {
  isPirateOpen: true,
  isStoryBlanksOpen: false,
  isSettingsOpen: false
};

export interface UIState {
  isPirateOpen: boolean;
  isStoryBlanksOpen: boolean;
  isSettingsOpen: boolean;
}

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    togglePirate(state) {
      state.isPirateOpen = !state.isPirateOpen;
    },
    toggleStoryBlanks(state) {
      state.isStoryBlanksOpen = !state.isStoryBlanksOpen;
    },
    toggleSettings(state) {
      state.isSettingsOpen = !state.isSettingsOpen;
    }
  },
  extraReducers: builder => {
    builder.addCase(clear, () => initialState);
  }
});
