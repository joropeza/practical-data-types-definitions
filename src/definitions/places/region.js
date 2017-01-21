import * as preparations from '../../preparations';
import * as tests from '../../tests';

const REGION = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/United_Nations_geoscheme',
    positiveTests: [
        'Europe',
        'Americas',
        'Oceania',
    ],
    negativeTests: [
        '',
        ' ',
        '0',
        'aa',
        'BBBBB',
        'word',
        'words with spaces',
        'a word',
        'Southeast Asia',
    ],
    regex: '[a-zA-Z]{2,}',
    preps: [preparations.trim],
    tests: [tests.regex, tests.region],
    specificity: 1000,
};

export default REGION;
