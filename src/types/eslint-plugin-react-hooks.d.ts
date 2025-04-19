declare module 'eslint-plugin-react-hooks' {
  import type { ESLint } from 'eslint';
  
  const plugin: {
    configs: {
      recommended: ESLint.ConfigData;
    };
    rules: Record<string, unknown>;
  };
  
  export default plugin;
}
