import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import jsxA11y from 'eslint-plugin-jsx-a11y';

import { commonConfigs } from './common.config.mjs';

export const webConfigs: ConfigWithExtendsArray = [
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    rules: {
      'import/prefer-default-export': 'off',
      'jsdoc/require-jsdoc': 'off',
      'new-cap': 'off',
      'no-shadow': 'error',
      'react/no-unknown-property': 'error',
    },
  },
];

export default [...commonConfigs, ...webConfigs];
