import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from "rollup-plugin-babel";
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import image from '@rollup/plugin-image';
import eslint from '@rollup/plugin-eslint'

import pkg from './package.json';

const isDev = process.env.NODE_ENV !== 'production';

export default {
    input: 'src/components/index.tsx', // 打包入口
    output:  [
        { // 打包出口
            name: 'index',
            file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
            format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
        },
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' }
    ],
    plugins: [ // 打包插件
        // postcss处理less文件，并用 autoprefixer 处理兼容,cssnano 压缩
        postcss({
            plugins: [autoprefixer,cssnano],
            extensions: ['.less', '.css'],
            use: ['less'],
            extract: 'index.css', // 输出路径
        }),
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        eslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['src/**'],
            exclude: ['node_modules/**', 'lib/**']
        }),
        typescript(),  // 会自动读取 文件tsconfig.json配置
        json(), // 从 JSON 文件中读取数据
        image(),
        babel({ // 让我们可以使用es6新特性来编写代码
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
            runtimeHelpers: true,       // 使plugin-transform-runtime生效
        }),  
        !isDev && terser(), // 压缩js代码，包括es6代码压缩
    ],
     // 第三方模块不会强行打包到输出中
     external: (id) => /^(react|react-dom|lodash)/.test(id),
};