import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import glob from 'rollup-plugin-glob'
import svelte from 'rollup-plugin-svelte'
import {terser} from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import sveltePreprocess from 'svelte-preprocess';

import pkg from './package.json'
import markdown from './src/utils/markdown.js'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' &&
                                     warning.message.includes('/@sapper/')) ||
                                    onwarn(warning)

const preprocess = sveltePreprocess({
  preserve : [ 'ld+json' ],
  // ...
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins:
        [
          replace({
            'process.browser' : true,
            'process.env.NODE_ENV' : JSON.stringify(mode),
          }),
          svelte({
            dev,
            hydratable : true,
            emitCss : true,
            preprocess,
          }),
          resolve(),
          commonjs(),
          markdown(),
          json(),
          glob(),
          legacy && babel({
            extensions : [ '.js', '.mjs', '.html', '.svelte' ],
            babelHelpers : 'runtime',
            exclude : [ 'node_modules/@babel/**' ],
            presets : [
              [
                '@babel/preset-env',
                {
                  targets : '> 0.25%, not dead',
                },
              ],
            ],
            plugins : [
              '@babel/plugin-syntax-dynamic-import',
              [
                '@babel/plugin-transform-runtime',
                {
                  useESModules : true,
                },
              ],
            ],
          }),

          !dev && terser({
            module : true,
          }),
        ],
    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins:
        [
          replace({
            'process.browser' : false,
            'process.env.NODE_ENV' : JSON.stringify(mode),
          }),
          svelte({
            generate : 'ssr',
            dev,
            preprocess,
          }),
          resolve(),
          commonjs(),
          json(),
          markdown(),
          glob(),
        ],
    external: Object.keys(pkg.dependencies)
                .concat(require('module').builtinModules ||
                        Object.keys(process.binding('natives'))),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins:
        [
          resolve(),
          replace({
            'process.browser' : true,
            'process.env.NODE_ENV' : JSON.stringify(mode),
          }),
          commonjs(),
          !dev && terser(),
        ],

    onwarn,
  },
}
