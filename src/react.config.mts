import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import commonConfig from './common.config.mjs';
import { webConfigs } from './web.config.mjs';

export const reactConfigs: ConfigWithExtendsArray = [
  react.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: { react },
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          alphabetize: { order: 'asc', ignoreCase: true },
          groups: [
            '/^react/',
            '/^@[^/].*/',
            '/^@\\/.*/',
            'module',
            ['parent', 'sibling', 'index'],
          ],
          newlinesBetween: 'always',
        },
      ],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/button-has-type': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-useless-fragment': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/self-closing-comp': 'error',
    },
  },
];

export default [
  ...commonConfig,
  ...webConfigs,
  ...reactConfigs,
  { plugins: { 'react-hooks': reactHooks } },
] as const as ConfigWithExtendsArray;
