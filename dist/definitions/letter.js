'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LETTER = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/English_alphabet',
    positiveTests: ['a', 'A', 'c', 'Z', 'A ', ' A', ' A '],
    negativeTests: ['', ' ', '0', 'aa', 'BB', 'word', 'words with spaces', 'a word'],
    regex: '^[A-Za-z]{1}$',
    preps: [preparations.trim],
    tests: [tests.regex],
    specificity: 1
};

exports.default = LETTER;