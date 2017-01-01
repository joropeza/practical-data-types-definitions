import { subregionSynonyms } from '../../preparations/places';
import * as tests from '../../tests';

const SUBREGION = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/English_alphabet',
    positiveTests: [
        'Southeast Asia',
        'North America',
        'Australia and New Zealand',
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
    preps: [subregionSynonyms],
    tests: [tests.regex, tests.subregion],
    specificity: 1,
};

export default SUBREGION;
