import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: SocialState = {
  nickname: 'Crikey',
  pirateName: 'Swagger McSwagger',
  pirate: 'the-assassin-pirate',
  storyBlanks: ['Red reaver', 'Blue bolt', 'Gray Goose', 'Pink Potter', 'Teal Tarzan']
};

export type StoryBlanks = [first: string, second: string, third: string, fourth: string, fifth: string];

export interface SocialState {
  nickname: string;
  pirateName: string;
  pirate: string | undefined;
  storyBlanks: StoryBlanks;
}

export const social = createSlice({
  name: 'social',
  initialState,
  reducers: {
    selectPirate(state, action: PayloadAction<string>) {
      state.pirate = action.payload;
    },
    updateName(state, action: PayloadAction<string>) {
      state.pirateName = action.payload;
    },
    updateStoryBlank(state, action: PayloadAction<[index: number, value: string]>) {
      const [i, v] = action.payload;
      state.storyBlanks[i] = v;
    }
  }
});
