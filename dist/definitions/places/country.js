'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var COUNTRY = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/English_alphabet',
    positiveTests: ['USA', 'Russia', 'Burkina Faso', 'Congo-Kinshasa'],
    negativeTests: ['', ' ', '0', 'aa', 'BBBBB', 'word', 'words with spaces', 'a word'],
    regex: '[a-zA-Z]{2,}',
    preps: [preparations.trim],
    tests: [tests.regex, tests.country],
    specificity: 1000
};

exports.default = COUNTRY;