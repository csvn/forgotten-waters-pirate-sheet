import { AnyAction, Unsubscribe } from '@reduxjs/toolkit';
import { ReactiveController, ReactiveControllerHost } from 'lit';
import { State } from '../state';
import { store } from './store';


export interface Stateful {
  state: State;
}

export class StateController implements ReactiveController {
  #unsub?: Unsubscribe;
  #host: Stateful & ReactiveControllerHost;

  constructor(host: Stateful & ReactiveControllerHost) {
    host.addController(this);
    this.#host = host;
  }

  hostConnected() {
    const updateState = () => {
      this.#host.state = store.getState();
    };

    updateState();
    this.#unsub = store.subscribe(updateState);
  }

  hostDisconnected() {
    this.#unsub?.();
  }

  dispatch(action: AnyAction) {
    store.dispatch(action);
  }
}
