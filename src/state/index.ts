import { combineReducers } from '@reduxjs/toolkit';
import { dice, type DiceState } from './dice';
import { constellation, type ConstellationEvents, type ConstellationState } from './constellation';
import { clear, exportData, importData } from './global';
import { skills, type SkillsState } from './skills';
import { social, type StoryBlanks, type SocialState } from './social';
import { data, type DataState } from './data';
import { settings, type SettingsState } from './settings';
import { ui, type UIState } from './ui';


export const rootReducer = combineReducers({
  constellation: constellation.reducer,
  data: data.reducer,
  dice: dice.reducer,
  skills: skills.reducer,
  social: social.reducer,
  settings: settings.reducer,
  ui: ui.reducer
});

export const actions = {
  constellation: constellation.actions,
  data: data.actions,
  dice: dice.actions,
  global: { clear, exportData, importData },
  skills: skills.actions,
  social: social.actions,
  settings: settings.actions,
  ui: ui.actions
};

export interface State {
  constellation: ConstellationState;
  data: DataState;
  dice: DiceState;
  skills: SkillsState;
  social: SocialState;
  settings: SettingsState;
  ui: UIState;
  _persist: { version: number, rehydrated: boolean };
}

export type { DiceState as CoinsState, ConstellationEvents, ConstellationState, DataState, SkillsState, StoryBlanks, SocialState, SettingsState, UIState };
