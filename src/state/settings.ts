import { createSlice } from '@reduxjs/toolkit';
import { clear } from './global';


const initialState: SettingsState = {
  shouldPlaySounds: true
};

export interface SettingsState {
  shouldPlaySounds: boolean;
}

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleSounds(state) {
      state.shouldPlaySounds = !state.shouldPlaySounds;
    }
  },
  extraReducers: builder => {
    builder.addCase(clear, () => initialState);
  }
});
