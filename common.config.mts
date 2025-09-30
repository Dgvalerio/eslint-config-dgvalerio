import { ConfigWithExtendsArray } from '@eslint/config-helpers';
import js from '@eslint/js';

import importHelpers from 'eslint-plugin-import-helpers';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import TSEslint from 'typescript-eslint';

export const commonConfigs: ConfigWithExtendsArray = [
  prettierRecommended,
  ...TSEslint.configs.recommended,
  react.configs.flat.recommended,
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.builtin,
      },
    },
    plugins: {
      'import-helpers': importHelpers,
      js,
      unicorn: unicorn,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^@[^/].*/',
            '/^@\\/.*/',
            'module',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'lines-between-class-members': ['error', 'always'],
      'no-console': 'warn',
      'no-nested-ternary': 'error',
      'no-restricted-imports': ['error', { patterns: ['.*'] }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message: 'Prefer named exports',
        },
      ],
      'no-unneeded-ternary': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'error',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'throw',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          arrowParens: 'always',
          endOfLine: 'lf',
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
      'unicorn/expiring-todo-comments': [
        'warn',
        {
          terms: ['TODO', 'FIXME'],
          ignoreDatesOnPullRequests: true,
          allowWarningComments: false,
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/no-abusive-eslint-disable': 'warn',
      'unicorn/no-empty-file': 'warn',
      'unicorn/no-lonely-if': 'warn',
      'unicorn/no-unnecessary-await': 'warn',
      'unicorn/prefer-logical-operator-over-ternary': 'warn',
      'unicorn/prefer-switch': 'warn',
      'unicorn/prefer-ternary': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['*.config.mjs', '*.config.mts'],
    rules: {
      'no-restricted-syntax': 'off',
      'no-restricted-imports': 'off',
    },
  },
];

export default commonConfigs;
