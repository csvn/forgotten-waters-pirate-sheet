import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from './global';


const initialState: DiceState = {
  reRoll: 0,
  misfortune: 0
};

export interface DiceState {
  reRoll: number;
  misfortune: number;
}

export const dice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<keyof DiceState>) {
      state[action.payload] += 1;
    },
    decrement(state, action: PayloadAction<keyof DiceState>) {
      if (state[action.payload] > 0) state[action.payload] -= 1;
    },
    roll(state) {
      if (state.misfortune > 0) state.misfortune -= 1;
    },
    reRoll(state) {
      state.reRoll -= 1;
      if (state.misfortune > 0) state.misfortune -= 1;
    }
  },
  extraReducers: builder => {
    builder.addCase(clear, () => initialState);
  }
});
