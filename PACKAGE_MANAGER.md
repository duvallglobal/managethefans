# Package Manager Usage Guidelines

## Yarn Only

This project uses Yarn as its only package manager. Please do not use npm or bun.

## Installation and Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

## Important Rules

1. Do not generate `package-lock.json` (npm) or `bun.lockb` (Bun) files
2. Always commit `yarn.lock` changes
3. Use `yarn add` and `yarn remove` for managing dependencies
4. If you see the error "package-lock.json exists", delete the file and use yarn

## For CI Systems

When setting up CI pipelines, ensure:
- Use `yarn install --frozen-lockfile` to ensure lockfile integrity
- Cache the `.yarn` and `node_modules` directories for faster builds
- Include a check for npm/bun lock files and fail if they exist

## Resolving Dependency Issues

If you encounter dependency issues:

```bash
# Clear cache and reinstall
yarn cache clean
yarn install

# Or reset everything
rm -rf node_modules
yarn install
```

Please report persistent package manager issues to the team lead. 