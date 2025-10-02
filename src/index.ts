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

interface Meta {
  name: string;
  version: string;
}

const meta: Meta = { name, version };

interface Config {
  meta: Meta;
  rules: ConfigWithExtendsArray;
  configs: {
    recommended: {
      meta: Meta;
      rules: ConfigWithExtendsArray;
    };
  };
}

const getConfig = (rules: ConfigWithExtendsArray): Config => {
  return {
    meta,
    rules,
    configs: {
      get recommended(): Config['configs']['recommended'] {
        return { meta, rules };
      },
    },
  };
};

const configs: Record<Scopes, Config> = {
  [Scopes.common]: getConfig(commonConfig),
  [Scopes.nest]: getConfig(nestConfig),
  [Scopes.web]: getConfig(webConfig),
  [Scopes.react]: getConfig(reactConfig),
  [Scopes.next]: getConfig(nextConfig),
};

export = configs;
