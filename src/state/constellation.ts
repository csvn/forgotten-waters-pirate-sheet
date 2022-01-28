import { createSlice } from '@reduxjs/toolkit';


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
  reducers: {}
});
