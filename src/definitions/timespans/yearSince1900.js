import * as preparations from '../../preparations';
import * as tests from '../../tests';

// TODO: low hanging fruit, make this work with years < 1000

const YEAR_IN_LATE_MODERNITY = {
    ECMAScriptPrimitive: 'number',
    ANSIDataType: 'INTEGER',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Late_modernity',
    dbPediaKey: 'Late_modernity',
    positiveTests: [
        '2017',
        2017,
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
        1001,
        '14/14/2017',
    ],
    regex: '^(19[0-9]\\d|20[0-4]\\d|2099)$',
    specificity: 100,
    preps: [preparations.trim],
    tests: [tests.regex],
};

export default YEAR_IN_LATE_MODERNITY;
