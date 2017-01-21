import * as preparations from '../../preparations';
import * as tests from '../../tests';

const COUNTRY = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/English_alphabet',
    positiveTests: [
        'USA',
        'Russia',
        'Burkina Faso',
        'Congo-Kinshasa',
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
    ],
    regex: '[a-zA-Z]{2,}',
    preps: [preparations.trim],
    tests: [tests.regex, tests.country],
    specificity: 1000,
};

export default COUNTRY;
