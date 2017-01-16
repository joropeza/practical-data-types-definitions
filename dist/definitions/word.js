'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var WORD = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'VARCHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Word',
    positiveTests: ['a', 'ab', 'apple', 'help', 'dfgdfshjgjkdsfghdfskjghdfskgjfdsh', 'WORD'],
    negativeTests: ['', '0', 'a a', 'words fail', 'A word.', 'words and words and words', '123'],
    regex: '^[a-zA-Z_]+$',
    preps: [preparations.trim],
    tests: [tests.regex],
    specificity: 1
};

exports.default = WORD;