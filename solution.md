Based on the error message "/bin/bash: line 1: vite: command not found" and the project structure, it appears that the dependencies are not properly installed. The project uses Vite as its build tool (version ^6.2.5 specified in package.json), but it's not available in the PATH.

To fix this issue, you can try either of these solutions:

1. Run the fix-dependencies.sh script:
```bash
chmod +x fix-dependencies.sh
./fix-dependencies.sh
```

2. Or manually reinstall dependencies:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

After running either of these commands, the Vite command should work properly. Then you can run the development server using:
```bash
npm run dev
```

The issue occurs because Vite is listed as a devDependency in package.json but isn't properly installed in the node_modules directory. Reinstalling the dependencies will resolve this issue.