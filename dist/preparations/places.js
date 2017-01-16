'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subregionSynonyms = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subregionSynonyms = exports.subregionSynonyms = function subregionSynonyms(input) {
    var cleanInput = _lodash2.default.toLower(input.replace(/\W/g, ''));
    var translations = {
        southeastasia: 'South-Eastern Asia',
        southeasternasia: 'South-Eastern Asia',
        seasia: 'South-Eastern Asia',
        northamerica: 'Northern America'
    };
    return translations[cleanInput] || input;
};