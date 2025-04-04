# Instructions to Fix TypeScript Type Definition Issues

1. The TypeScript compiler is unable to find the type definition files even though they are listed in package.json. This typically happens when node_modules are not properly installed or cached.

2. To fix this:

   a. Make the reinstall script executable:
   ```bash
   chmod +x reinstall-deps.sh
   ```

   b. Run the reinstall script:
   ```bash
   ./reinstall-deps.sh
   ```

3. This script will:
   - Remove the node_modules directory
   - Remove package-lock.json
   - Perform a fresh npm install

This should properly install all the type definitions and resolve the TypeScript errors.