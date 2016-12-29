/* eslint-disable */
'use strict';
var rimraf = require('rimraf-promise');
var colors = require('colors');
var exec = require('child-process-promise').exec;

console.log('building dist'.green);

rimraf('./dist')
    .then(function (error) {
        let babelCli = 'babel --optional es7.objectRestSpread ./src --out-dir ./dist';
        return exec(babelCli).fail(function (error) {
            console.log(colors.red(error));
        });
    }).then(() => console.log('dist built'.green));
