import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: SkillsState = {
  exploration: 0,
  brawn: 0,
  hunting: 0,
  aim: 0,
  swagger: 0,
  navigation: 0
};

export interface SkillsState {
  exploration: number;
  brawn: number;
  hunting: number;
  aim: number;
  swagger: number;
  navigation: number;
}

export const skills = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    update(state, action: PayloadAction<[keyof SkillsState, number]>) {
      const [skill, value] = action.payload;
      state[skill] = value;
    }
  }
});
