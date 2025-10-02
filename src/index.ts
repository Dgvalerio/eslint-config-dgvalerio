/* eslint-disable no-restricted-imports,@typescript-eslint/no-require-imports */
import { ConfigWithExtendsArray } from '@eslint/config-helpers';

import commonConfig from './common.config.mjs';
import nestConfig from './nest.config.mjs';
import nextConfig from './next.config.mjs';
import reactConfig from './react.config.mjs';
import webConfig from './web.config.mjs';

const { name, version } =
  require('../package.json') as typeof import('../package.json');

enum Scopes {
  common = 'common',
  nest = 'nest',
  web = 'web',
  react = 'react',
  next = 'next',
}

export = {
  meta: { name, version },
  configs: {
    get recommended(): Record<Scopes, ConfigWithExtendsArray> {
      return {
        [Scopes.common]: commonConfig,
        [Scopes.nest]: nestConfig,
        [Scopes.web]: webConfig,
        [Scopes.react]: reactConfig,
        [Scopes.next]: nextConfig,
      };
    },
  },
};
