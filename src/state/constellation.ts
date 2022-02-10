import { createSlice } from '@reduxjs/toolkit';
import { constellationToggle } from './global';


const initialState: ConstellationState = {
  events: [false, false, false, false, false],
  progress: []
};

export type ConstellationEvents = [first: boolean, second: boolean, third: boolean, fourth: boolean, fifth: boolean];

export interface ConstellationState {
  events: ConstellationEvents;
  progress: number[];
}

export const constellation = createSlice({
  name: 'constellation',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(constellationToggle, (state, action) => {
      const [id] = action.payload;
      const index = state.progress.indexOf(id);
      if (index >= 0) {
        state.progress.splice(index, 1);
      } else {
        state.progress.push(id);
      }
    })
  }
});
