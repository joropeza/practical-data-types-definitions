'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _places = require('../../preparations/places');

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SUBREGION = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/English_alphabet',
    positiveTests: ['Southeast Asia', 'North America', 'Australia and New Zealand'],
    negativeTests: ['', ' ', '0', 'aa', 'BBBBB', 'word', 'words with spaces', 'a word'],
    regex: '[a-zA-Z]{2,}',
    preps: [_places.subregionSynonyms],
    tests: [tests.regex, tests.subregion],
    specificity: 1
};

exports.default = SUBREGION;