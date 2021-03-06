import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import html from 'rollup-plugin-html';
import visualizer from 'rollup-plugin-visualizer';
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { terser } from 'rollup-plugin-terser';

const getPlugins = () => [
    nodeResolve(),
    commonJs(),
    html(),
    sizeSnapshot(),
    terser(),
    visualizer()
];

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: getPlugins()
};