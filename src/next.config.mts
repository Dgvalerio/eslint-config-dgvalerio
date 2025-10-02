import { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { FlatCompat } from '@eslint/eslintrc';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { commonConfigs } from './common.config.mjs';
import { reactConfigs } from './react.config.mjs';
import { webConfigs } from './web.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export const nextConfigs: ConfigWithExtendsArray = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['next-env.d.ts'],
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          alphabetize: { order: 'asc', ignoreCase: true },
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
      '**/layout.tsx',
      '**/page.tsx',
      '**/loading.tsx',
      '**/error.tsx',
      '**/not-found.tsx',
      '**/opengraph-image.tsx',
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
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...nextConfigs,
] as const as ConfigWithExtendsArray;
