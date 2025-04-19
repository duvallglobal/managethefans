import React from 'react';

declare global {
  // Ensure JSXElementConstructor is properly defined
  namespace React {
    type JSXElementConstructor<P> = ((props: P) => React.ReactElement | null) | (new (props: P) => React.Component<P, any>);
  }
}

export {};
