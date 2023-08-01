# Eslint Configuration

ESlint configuration recommended by Davi Gonçalves Valério.

## What's included?

|                       | React | Next | Nest |
|-----------------------|:-----:|:----:|:----:|
| Google config base    |   ✅   |  ✅   |  ✅   |
| Import Helpers plugin |       |  ✅   |  ✅   |
| React plugin          |   ✅   |  ✅   |      |
| React Hooks plugin    |   ✅   |      |      |
| JSX a11y plugin       |   ✅   |  ✅   |      |
| Prettier              |   ✅   |  ✅   |  ✅   |
| JSDoc Plugin          |       |      |  ✅   |

## Setup

1. Install the dependencies
   ```
   npm i -D eslint @dgvalerio/eslint-config
   ```
2. Create a `.eslintrc.json` file extending the config:\
   **If you want to set up a ReactJS project:**
   ```
   {
     "extends": "@dgvalerio/eslint-config/react"
   }
   ```
   **If you want to set up a Next.js project:**
   ```
   {
     "extends": "@dgvalerio/eslint-config/next"
   }
   ```
   **If you want to set up a NestJS project:**
   ```
   {
     "extends": "@dgvalerio/eslint-config/nest"
   }
   ```
