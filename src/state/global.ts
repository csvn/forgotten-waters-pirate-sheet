import { createAction } from '@reduxjs/toolkit';


export const clear = createAction('global/clear');
export const constellationToggle = createAction<number>('constellation/toggle');
