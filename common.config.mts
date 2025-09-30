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
    rules: {
      'array-bracket-newline': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': 'off',
      'arrow-parens': ['error', 'always'],
      'block-spacing': ['error', 'never'],
      'brace-style': 'error',
      camelcase: ['error', { properties: 'never' }],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': 'error',
      'constructor-super': 'error',
      curly: ['error', 'multi-line'],
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'generator-star-spacing': ['error', 'after'],
      'guard-for-in': 'error',
      indent: [
        'error',
        2,
        {
          CallExpression: { arguments: 2 },
          FunctionDeclaration: { body: 1, parameters: 2 },
          FunctionExpression: { body: 1, parameters: 2 },
          MemberExpression: 2,
          ObjectExpression: 1,
          SwitchCase: 1,
          ignoredNodes: ['ConditionalExpression'],
        },
      ],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'linebreak-style': 'error',
      'max-len': [
        'error',
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
          ignorePattern: 'goog.(module|require)',
        },
      ],
      'new-cap': 'error',
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'off',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': ['error', { max: 2 }],
      'no-new-object': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-tabs': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-unexpected-multiline': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'object-curly-spacing': 'error',
      'one-var': [
        'error',
        {
          var: 'never',
          let: 'never',
          const: 'never',
        },
      ],
      'operator-linebreak': ['error', 'after'],
      'padded-blocks': ['error', 'never'],
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'quote-props': ['error', 'consistent'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'rest-spread-spacing': 'error',
      semi: 'error',
      'semi-spacing': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        {
          asyncArrow: 'always',
          anonymous: 'never',
          named: 'never',
        },
      ],
      'spaced-comment': ['error', 'always'],
      'switch-colon-spacing': 'error',
      'yield-star-spacing': ['error', 'after'],
    },
  },
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
