import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from './global';


const initialState: ConstellationState = {
  events: [false, false, false, false, false],
  chartEvents: [],
  chartProgress: []
};

export type ConstellationEvents = [first: boolean, second: boolean, third: boolean, fourth: boolean, fifth: boolean];

export interface ConstellationState {
  events: ConstellationEvents;
  chartEvents: number[];
  chartProgress: number[];
}

export const constellation = createSlice({
  name: 'constellation',
  initialState,
  reducers: {
    toggleChartEvent({ chartEvents }, { payload: id }: PayloadAction<number>) {
      if (!chartEvents.includes(id)) {
        chartEvents.push(id);
      } else {
        chartEvents.splice(chartEvents.indexOf(id), 1);
      }
    },
    toggleChartProgress({ chartProgress }, { payload: id }: PayloadAction<number>) {
      if (!chartProgress.includes(id)) {
        chartProgress.push(id);
      } else {
        chartProgress.splice(chartProgress.indexOf(id), 1);
      }
    },
    toggleEvent({ events }, { payload: id }: PayloadAction<number>) {
      if (events[id] !== undefined) events[id] = !events[id];
    }
  },
  extraReducers: builder => {
    builder.addCase(clear, () => initialState);
  }
});
