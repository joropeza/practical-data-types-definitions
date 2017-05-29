'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// TODO: low hanging fruit, make this work with years < 1000

var YEAR_IN_LATE_MODERNITY = {
    ECMAScriptPrimitive: 'number',
    ANSIDataType: 'INTEGER',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Late_modernity',
    dbPediaKey: 'Late_modernity',
    positiveTests: ['2017', 2017, 1999],
    negativeTests: ['', '0', 'aa', 'word', 'words with spaces', 'a word', 12345, 1001, '14/14/2017'],
    regex: '^(19[0-9]\\d|20[0-4]\\d|2099)$',
    specificity: 100,
    preps: [preparations.trim],
    tests: [tests.regex]
};

exports.default = YEAR_IN_LATE_MODERNITY;