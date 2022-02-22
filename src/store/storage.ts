import { get, set, del, createStore, clear } from 'idb-keyval';
import { WebStorage } from 'redux-persist';


export class IDBStorage implements WebStorage {
  #store = createStore('v0', 'Pirate');

  constructor() {
    // Remove unused data
    clear();
  }

  async getItem(key: string) {
    return JSON.stringify(await get(key, this.#store));
  }
  setItem(key: string, item: string) {
    return set(key, JSON.parse(item), this.#store);
  }
  removeItem(key: string) {
    return del(key, this.#store);
  }
}
