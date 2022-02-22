declare module '*.mp3' {
  const href: string;
  export default href;
}
declare module '*.webp' {
  const href: string;
  export default href;
}
declare module '*.svg' {
  const href: string;
  export default href;
}
declare module '*.json' {
  const json: any;
  export default json;
}


interface Array<T> {
  at(index: number): T;
}
