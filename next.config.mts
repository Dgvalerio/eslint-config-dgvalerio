import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import commonConfigs from './common.config.mjs';
import { reactConfigs } from './react.config.mjs';
import { webConfigs } from './web.config.mjs';

export const nextConfigs: ConfigWithExtendsArray = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['next-env.d.ts'],
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
          groups: [
            '/^react/',
            '/^next/',
            '/^@[^/].*/',
            '/^@\\/.*/',
            'module',
            ['parent', 'sibling', 'index'],
          ],
          newlinesBetween: 'always',
        },
      ],
    },
  },
  {
    files: [
      'layout.tsx',
      'page.tsx',
      'loading.tsx',
      'error.tsx',
      'not-found.tsx',
      'opengraph-image.tsx',
      '*.config.mjs',
      '*.config.ts',
      '*.config.js',
    ],
    rules: { 'no-restricted-syntax': 'off' },
  },
  {
    files: ['cypress/**/*.**', 'tailwind.config.ts'],
    rules: {
      'no-restricted-imports': 'off',
      'spaced-comment': 'off',
    },
  },
];

export default [
  ...commonConfigs,
  ...webConfigs,
  ...reactConfigs,
  ...nextConfigs,
];
