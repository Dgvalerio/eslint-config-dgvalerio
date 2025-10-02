# ESLint Configuration

ESLint configuration recommended by Davi Gonçalves Valério.

## What's included? ✅

|                                                                                            | Common | Nest | Web | React | Next |
|--------------------------------------------------------------------------------------------|:------:|:----:|:---:|:-----:|:----:|
| My base configurations                                                                     |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)                       |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)         |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-plugin-import-helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers) |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)             |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)               |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [prettier](https://www.npmjs.com/package/prettier)                                         |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)             |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)             |   ✅    |  ✅   |  ✅  |   ✅   |  ✅   |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)                   |        |      |     |   ✅   |  ✅   |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)       |        |      |     |   ✅   |  ✅   |
| [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)                     |        |      |     |       |  ✅   |

## Installation

---

   ```
   # npm
   npm i -D eslint @dgvalerio/eslint-config

   # yarn
   yarn add -D eslint @dgvalerio/eslint-config
   ```

## Usage

There are five project types available (common, nest, web, react and next). You should choose the one that best suits
your project type.

### Flat Config (>=2.0.0)

Create a `eslint.config.mjs` or `eslint.config.mjs` and add one of these configs:

**If you just want the basic settings:**

```js
import dgvalerioConfig from '@dgvalerio/eslint-config';

const eslintConfig = [...dgvalerioConfig.configs.recommended.common];

export default eslintConfig;
```

**If you want basic web settings:**

```js
import dgvalerioConfig from '@dgvalerio/eslint-config';

const eslintConfig = [...dgvalerioConfig.configs.recommended.web];

export default eslintConfig;
```

**If you want to set up a ReactJS project:**

```js
import dgvalerioConfig from '@dgvalerio/eslint-config';

const eslintConfig = [...dgvalerioConfig.configs.recommended.react];

export default eslintConfig;
```

**If you want to set up a Next.js project:**

```js
import dgvalerioConfig from '@dgvalerio/eslint-config';

const eslintConfig = [...dgvalerioConfig.configs.recommended.next];

export default eslintConfig;
```

**If you want to set up a NestJS project:**

```js
import dgvalerioConfig from '@dgvalerio/eslint-config';

const eslintConfig = [...dgvalerioConfig.configs.recommended.nest];

export default eslintConfig;
```

### Legacy (< 2.0.0)

Create a `.eslintrc.json` file extending the config:

**If you just want the basic settings:**

   ```json
   {
     "extends": "@dgvalerio/eslint-config/common"
   }
   ```

**If you want basic web settings:**

   ```json
   {
     "extends": "@dgvalerio/eslint-config/web"
   }
   ```

**If you want to set up a ReactJS project:**

   ```json
   {
     "extends": "@dgvalerio/eslint-config/react"
   }
   ```

**If you want to set up a Next.js project:**

   ```json
   {
     "extends": "@dgvalerio/eslint-config/next"
   }
   ```

**If you want to set up a NestJS project:**

   ```json
   {
     "extends": "@dgvalerio/eslint-config/nest"
   }
   ```
