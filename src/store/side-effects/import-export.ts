import type { AnyAction } from '@reduxjs/toolkit';
import { exportData, importData } from '../../state/global';
import { State } from '../../state';
import { delay } from '../../util';


export function importExport(action: AnyAction, state: State) {
  if (exportData.match(action)) {
    const { data, _persist, ...downloadState } = state;
    downloadText('pirate-data.json', JSON.stringify(downloadState));
  } else if (importData.match(action)) {
    uploadFile();
  }
};


function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const revokeUrl = async () => {
    await delay(150);
    URL.revokeObjectURL(url);
  };

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.addEventListener('click', revokeUrl, { once: true });
  a.click();
}

function uploadFile() {
  const f = document.createElement('input');
  f.type = 'file';
  f.click();
  alert('Not implemented! (TODO)');
}
