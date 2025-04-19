#!/bin/bash

# Install required dependencies if missing
if ! npm list stylelint-config-recommended >/dev/null 2>&1; then
  echo "Installing required stylelint dependencies..."
  npm install --save-dev stylelint-config-recommended postcss-safe-parser
fi

# Fix CSS files
echo "Fixing CSS files with Stylelint..."
npx stylelint "src/**/*.css" --fix

echo "CSS files fixed!"
