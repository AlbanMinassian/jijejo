// help: https://2ality.com/2019/10/hybrid-npm-packages.html
// help: https://buzut.net/configurer-rollup-bundles-esm-cjs/

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const INPUT = 'src/index.js';

const browser = {
    iife: {
        min: {
            input: INPUT,
            output: {
                format: 'iife',
                file: 'dist/jijejo.iife.min.js',
                name: 'jijejo' // les modules iife doivent être nommés afin de pouvoir y faire référence depuis d'autres modules
            },
            plugins: [
                commonjs(), // prise en charge de require
                resolve(), // prise en charge des modules depuis node_modules
                babel(), // transpilation
                terser() // minification
            ]
        },
        max: {
            input: INPUT,
            output: {
                format: 'iife',
                file: 'dist/jijejo.iife.js',
                name: 'jijejo' // les modules iife doivent être nommés afin de pouvoir y faire référence depuis d'autres modules
            },
            plugins: [
                commonjs(), // prise en charge de require
                resolve(), // prise en charge des modules depuis node_modules
                babel(), // transpilation
            ]
        }
    },
    esm: {
        min: {
            input: INPUT,
            output: {
                format: 'es',
                file: 'dist/jijejo.esm.min.js'
            },
            plugins: [
                commonjs(),
                resolve(),
                babel(),
                terser()
            ]
        },
        max: {
            input: INPUT,
            output: {
                format: 'es',
                file: 'dist/jijejo.esm.js'
            },
            plugins: [
                commonjs(),
                resolve(),
                babel(),
            ]
        }
    }
};

const node = {
    cjs:  {
        input: INPUT,
        output: {
            format: 'cjs',
            file: 'commonjs/index.js'
        },
        plugins: [
            commonjs(),
            resolve(),
            // babel(),
        ]
    },
    esm:  {
        input: INPUT,
        output: {
            format: 'es',
            file: 'esm/index.js'
        },
        plugins: [
            commonjs(),
            resolve(),
            // babel(),
        ]
    }
};

let conf = {};
if (process.env.ROLLUP_CONF === 'browser:iife:min') {
    conf = browser.iife.min;
}
if (process.env.ROLLUP_CONF === 'browser:iife:max') {
    conf = browser.iife.max;
}
if (process.env.ROLLUP_CONF === 'browser:esm:min') {
    conf = browser.esm.min;
};
if (process.env.ROLLUP_CONF === 'browser:esm:max') {
    conf = browser.esm.max;
};
if (process.env.ROLLUP_CONF === 'node:cjs') {
    conf = node.cjs;
};
if (process.env.ROLLUP_CONF === 'node:esm') {
    conf = node.esm;
};
export default conf;