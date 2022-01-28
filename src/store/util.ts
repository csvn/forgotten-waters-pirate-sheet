/** Turns any provided value into void. Utility for using arrow functions with reducers */
export const v = (_v: unknown) => { /* void */ };

/** Utility for writing `if` condition logic inside reducers. */
export const when = (condition: boolean, callback: () => void) => { if (condition === true) callback(); };
