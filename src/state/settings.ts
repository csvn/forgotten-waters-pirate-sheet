import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from './global';


const initialState: SettingsState = {
  theme: undefined,
  font: undefined,
  shouldPlaySounds: true,
  soundVolume: 0.2
};

export interface SettingsState {
  theme: string | undefined;
  font: string | undefined;
  shouldPlaySounds: boolean;
  soundVolume: number;
}

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    selectTheme(state, action: PayloadAction<string | undefined>) {
      state.theme = action.payload;
    },
    selectFont(state, action: PayloadAction<string | undefined>) {
      state.font = action.payload;
    },
    toggleSounds(state) {
      state.shouldPlaySounds = !state.shouldPlaySounds;
    },
    adjustVolume(state, action: PayloadAction<number>) {
      state.soundVolume = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(clear, () => initialState);
  }
});
