import { combineReducers } from '@reduxjs/toolkit';
import { coins, type CoinsState } from './coins';
import { constellation, type ConstellationEvents, type ConstellationState } from './constellation';
import { skills, type SkillsState } from './skills';
import { social, type StoryBlanks, type SocialState } from './social';
import { ui, type UIState } from './ui';


export const rootReducer = combineReducers({
  coins: coins.reducer,
  constellation: constellation.reducer,
  skills: skills.reducer,
  social: social.reducer,
  ui: ui.reducer
});

export const actions = {
  coins: coins.actions,
  constellation: constellation.actions,
  skills: skills.actions,
  social: social.actions,
  ui: ui.actions
};

export interface State {
  coins: CoinsState;
  constellation: ConstellationState;
  skills: SkillsState;
  social: SocialState;
  ui: UIState;
}

export type { CoinsState, ConstellationEvents, ConstellationState, SkillsState, StoryBlanks, SocialState };
