import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import commonConfig from './common.config.mjs';

export const nestConfigs: ConfigWithExtendsArray = [];

export default [
  ...commonConfig,
  ...nestConfigs,
] as const as ConfigWithExtendsArray;
