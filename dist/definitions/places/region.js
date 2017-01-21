'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var REGION = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/United_Nations_geoscheme',
    positiveTests: ['Europe', 'Americas', 'Oceania'],
    negativeTests: ['', ' ', '0', 'aa', 'BBBBB', 'word', 'words with spaces', 'a word', 'Southeast Asia'],
    regex: '[a-zA-Z]{2,}',
    preps: [preparations.trim],
    tests: [tests.regex, tests.region],
    specificity: 1
};

exports.default = REGION;