import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v } from '../store/util';


export const fetchPirates = createAsyncThunk<Pirate[]>('data/fetchPirates', async() => {
  const pirates = await import('../pirates.json');
  return pirates.default;
});

const initialState: DataState = {
  pirates: []
};

export interface Pirate {
  id: string;
  name: string;
  positions: {
    chartEvents: Point[];
    chartProgress: Point[];
    constellationEvents: Vertical[];
    endings: {
      bad: Point;
      good: Point;
      legendary: Point;
    };
  };
}

export type Vertical = number;
export interface Point {
  x: number;
  y: number;
}

export interface DataState {
  pirates: Pirate[];
}

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPirates.fulfilled, (state, action) => v(state.pirates.push(...action.payload)));
  }
});
