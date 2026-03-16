# @vue-laab/presets 🧪

A strictly opinionated set of configurations for **Vue 3** and **JavaScript** projects. Designed to enforce clean code, prevent reactivity pitfalls, and maintain a unified visual style.

> [!IMPORTANT]
> **Compatibility Note**: This package is optimized for **ESLint 9.x**.
> Due to breaking changes in ESLint 10 (specifically the removal of `context.getSourceCode`), some Vue plugins may throw errors. We recommend sticking to ESLint `^9.0.0` until official plugin support for v10 is stabilized.

## Key Features

- **Modern ESLint**: Fully compatible with ESLint 9+ Flat Config.
- **Vue 3 Optimized**: Custom rules for Composition API (reactive unwrapping, block order).
- **Strict JS**: Single quotes, no semicolons, and mandatory trailing commas.
- **Reactivity Guard**: Prevents common pitfalls like missing .value in refs.
- **Prettier Integrated**: Ready-to-use formatting that perfectly matches the linting rules.

## Installation

```bash
npm install -D @vue-laab/presets
```

## Setup

- **ESLint** (eslint.config.js)

```js
import vueLaab from '@vue-laab/presets';

export default [
  ...vueLaab,
  {
    // Override or add project-specific rules here
  },
];
```

- **Prettier** (prettier.config.js)

```js
import prettierConfig from '@vue-laab/presets/prettier';

export default {
  ...prettierConfig,
};
```
