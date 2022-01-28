import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v } from '../store/util';


export const fetchPirates = createAsyncThunk<Pirate[]>('ui/fetchPirates', async() => {
  const pirates = await import('../pirates.json');
  return pirates.default;
});

const initialState: UIState = {
  pirates: []
};

export interface Pirate {
  id: string;
  name: string;
  constellation: { x: number, y: number, type: 'event' | 'progress' }[];
}

export interface UIState {
  pirates: Pirate[];
}

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPirates.fulfilled, (state, action) => v(state.pirates.push(...action.payload)));
  }
})
