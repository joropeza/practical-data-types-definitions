import * as preparations from '../../preparations';
import * as tests from '../../tests';

// TODO: low hanging fruit, make this work with years < 1000

const YEAR = {
    ECMAScriptPrimitive: 'number',
    ANSIDataType: 'INTEGER',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Year',
    dbPediaKey: 'Year',
    positiveTests: [
        '2017',
        2017,
        1001,
        1999,
    ],
    negativeTests: [
        '',
        '0',
        'aa',
        'word',
        'words with spaces',
        'a word',
        12345,
        '14/14/2017',
    ],
    regex: '^\\d{4}$',
    specificity: 10,
    preps: [preparations.trim],
    tests: [tests.regex],
};

export default YEAR;
