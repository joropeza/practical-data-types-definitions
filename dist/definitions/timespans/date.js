'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DATE = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'DATETIME',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Word',
    dbPediaKey: 'Ticker_symbol',
    positiveTests: ['05/05/2017', '31/01/2017', '01/31/2017'],
    negativeTests: ['', '0', 'aa', 'word', 'words with spaces', 'a word', 12345, '14/14/2017'],
    regex: '.{4,}',
    specificity: 1,
    preps: [preparations.trim],
    tests: [tests.date]
};

exports.default = DATE;