import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v, when } from '../store/util';
import { clear } from './global';
import { rollDice, reRollDice } from './room';


const initialState: CoinsState = {
  reRoll: 0,
  misfortune: 0,
  constellationEvent: 0
};

export interface CoinsState {
  reRoll: number;
  misfortune: number;
  constellationEvent: number;
}

export const coins = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<keyof CoinsState>) {
      state[action.payload] += 1;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(clear, () => initialState)
      .addCase(rollDice, draft => when(draft.misfortune > 0, () => draft.misfortune -= 1))
      .addCase(reRollDice, draft => v(draft.reRoll -= 1));
  }
});
