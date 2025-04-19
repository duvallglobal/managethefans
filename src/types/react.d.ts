/// <reference types="react" />

// This file enhances TypeScript's understanding of React JSX
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Ensure this is treated as a module
export {};
