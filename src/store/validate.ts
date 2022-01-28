import { State } from '../state';


type Primitive = string | number | boolean | undefined | Primitive[];
type ValidationType<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends (string | undefined) ? `string|undefined` : never;
type Validator<T> = {
  [P in keyof T]:
    T[P] extends object ? Validator<T[P]> :
    T[P] extends (infer D)[] ? Validator<D> :
    T[P] extends Primitive ? ValidationType<T[P]> : never;
};
type Entries<T> = [keyof T, T[keyof T]][];

const stateSchema: Validator<State> = {
  social: {
    nickname: 'string',
    pirate: 'string|undefined',
    pirateName: 'string',
    storyBlanks: ['string', 'string', 'string', 'string', 'string']
  },
  coins: {
    misfortune: 'number',
    reRoll: 'number',
    constellationEvent: 'number',
  },
  skills: {
    aim: 'number',
    brawn: 'number',
    hunting: 'number',
    swagger: 'number',
    navigation: 'number',
    exploration: 'number'
  },
  constellation: {
    events: ['boolean', 'boolean', 'boolean', 'boolean', 'boolean'],
    progress: []
  }
};

export function validateState(state: State) {
  checkValue(state, stateSchema);
}

function checkValue<T>(obj: T, schema: Validator<T>) {
  if (Array.isArray(schema)) {
    schema.forEach((v, i) => checkValue((obj as any)[i], v));
  } else if (typeof schema === 'object') {
    for (const [k, v] of Object.entries(schema) as Entries<typeof schema>) {
      checkValue(obj[k], v);
    }
  } else if (schema === 'string|undefined') {
    assert(typeof obj === 'string' || typeof obj === 'undefined');
  } else {
    assert(typeof obj === schema);
  }
}

function assert(value: boolean): asserts value is true {
  if (value !== true) throw new Error('Assertion failed');
}
