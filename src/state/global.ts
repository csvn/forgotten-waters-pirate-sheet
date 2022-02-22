import { createAction } from '@reduxjs/toolkit';


export const clear = createAction('global/clear');
export const exportData = createAction('global/export');
export const importData = createAction('global/import');
