import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import jsxA11y from 'eslint-plugin-jsx-a11y';

import commonConfig from './common.config.mjs';

export const webConfigs: ConfigWithExtendsArray = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      'jsdoc/require-jsdoc': 'off',
      'new-cap': 'off',
    },
  },
];

export default [
  ...commonConfig,
  {
    plugins: { 'jsx-a11y': jsxA11y },
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  ...webConfigs,
] as const as ConfigWithExtendsArray;
