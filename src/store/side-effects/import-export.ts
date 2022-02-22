import type { AnyAction } from '@reduxjs/toolkit';
import { exportData, importData } from '../../state/global';
import { State } from '../../state';
import { delay, event } from '../../util';


export async function importExport(action: AnyAction, state: State) {
  if (exportData.match(action)) {
    const { data, _persist, ...downloadState } = state;
    await downloadText('pirate-data.json', JSON.stringify(downloadState));
  } else if (importData.match(action)) {
    const payload = await uploadFile();
    alert(`There's no validation on the imported file's content. I'll just trust that you are providing data in a correct format, alright? 🤨`);
    if (payload) return { type: 'persist/REHYDRATE', key: 'root', import: true, payload };
  }
};


async function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  const e = event(a, 'click');
  a.href = url;
  a.download = filename;
  a.click();

  await e;
  await delay(50);
  URL.revokeObjectURL(url);
}

async function uploadFile() {
  const f = document.createElement('input');
  f.type = 'file';
  f.accept = 'application/json,.json';
  f.click();
  await event(f, 'input');

  if (f.files) {
    const [file] = f.files!;
    const content = JSON.parse(await file.text());
    return content as State;
  }

  return undefined;
}
