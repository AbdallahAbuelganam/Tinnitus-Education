declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const content: any;
  export default content;
}

// Allow importing non-TS modules in general
declare module 'figma:*';
