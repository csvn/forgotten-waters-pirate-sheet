export async function selectFile(mime: string) {
  const file = document.createElement('input');
  file.type = 'file';
  file.accept = mime;
  file.multiple = false;
  file.hidden = true;
  file.click();
  await nextEvent(file, 'change');
  return file.files?.[0];
}

export function nextEvent(el: HTMLElement, event: string) {
  return new Promise(resolve => {
    el.addEventListener(event, e => resolve(e), { once: true });
  });
}
