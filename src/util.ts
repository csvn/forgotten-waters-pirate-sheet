import type { AnyAction } from '@reduxjs/toolkit';
import type { StateController } from './store/controller';


export function keys<T>(o: T): (keyof T)[] {
  return Object.keys(o) as any;
}

export function throws<T extends Error>(err: T): never {
  throw err;
}

export function range(index: number) {
  return Array.from({ length: index }, (_, i) => i);
}

export function delay(ms: number) {
  return new Promise<void>(res => setTimeout(() => res(), ms));
}

export function debounce<T extends (...args: A) => void, A extends any[]>(ms: number, fn: T): T {
  let timerId: number;
  const debounced = (...args: A) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), ms);
  };
  return debounced as T;
}

export function event<T extends EventTarget, K extends keyof GlobalEventHandlersEventMap>(target: T, event: K): Promise<GlobalEventHandlersEventMap[K]>;
export function event<T extends EventTarget, E extends Event>(target: T, event: string): Promise<E>
export function event(target: EventTarget, event: string) {
  return new Promise(res => target.addEventListener(event, e => res(e), { once: true }));
}

export function inputActionFactory(stateController: StateController) {
  return (actionCreator: (value: string) => AnyAction) => {
    const dispatchDebounced = debounce(200, (value: string) => stateController.dispatch(actionCreator(value)));
    return (event: InputEvent) => dispatchDebounced((event.currentTarget as HTMLInputElement).value);
  };
}
