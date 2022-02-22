import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from './global';


const initialState: SettingsState = {
  theme: undefined,
  shouldPlaySounds: true
};

export interface SettingsState {
  theme: string | undefined;
  shouldPlaySounds: boolean;
}

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    selectTheme(state, action: PayloadAction<string | undefined>) {
      state.theme = action.payload;
    },
    toggleSounds(state) {
      state.shouldPlaySounds = !state.shouldPlaySounds;
    }
  },
  extraReducers: builder => {
    builder.addCase(clear, () => initialState);
  }
});
