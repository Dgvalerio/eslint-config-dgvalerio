import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import { commonConfigs } from './common.config.mjs';

export const nestConfigs: ConfigWithExtendsArray = [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    rules: { 'import/prefer-default-export': 'off' },
  },
];

export default [...commonConfigs, ...nestConfigs];
