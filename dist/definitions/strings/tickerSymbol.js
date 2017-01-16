'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var TICKER_SYMBOL = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'VARCHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Word',
    dbPediaKey: 'Ticker_symbol',
    positiveTests: ['A', 'AA', 'AAPL', 'TWTR', 'SPY'],
    negativeTests: ['', '0', 'aa', 'word', 'words with spaces', 'a word'],
    regex: '^[A-Z_]+$',
    specificity: 100,
    preps: [preparations.trim],
    tests: [tests.regex]
};

exports.default = TICKER_SYMBOL;