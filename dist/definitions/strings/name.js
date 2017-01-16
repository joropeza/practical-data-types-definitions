'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preparations = require('../../preparations');

var preparations = _interopRequireWildcard(_preparations);

var _tests = require('../../tests');

var tests = _interopRequireWildcard(_tests);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var NAME = {
    ECMAScriptPrimitive: 'string',
    definition: 'a word or set of words by which a person, animal, place, or ' + 'thing is known, addressed, or referred to',
    ANSIDataType: 'VARCHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Name',
    dbPediaKey: 'Name',
    positiveTests: ['Angelo', 'Jon Oropeza', 'Southeast Asia', 'John Paul Jones', 'Apple Inc.', 'Microsoft Corporation', 'Donald J. Trump', 'Sam O\'Malley', 'Connor Boatwick-Jackson', 'Mr. Rielly'],
    negativeTests: ['', '0', 'aa', 'word', 'words with spaces', 'a word', 'A B C D E F G H I J K', 'JEFF Martins', 'JEdd Martins'],
    regex: '(?!^.*[A-Z]{2,}.*$)^[A-Z][a-z]+((\\s)?((\'|\\-|\\.)?([A-Za-z]|\\.)+))*$',
    specificity: 10,
    preps: [preparations.trim],
    tests: [tests.regex]
};

exports.default = NAME;