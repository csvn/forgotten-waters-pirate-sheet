import { createAction } from '@reduxjs/toolkit';


export const clear = createAction('global/clear');
export const constellationToggle = createAction<[id: number, type: 'event' | 'progress', add: boolean]>('constellation/toggle');
