import * as preparations from '../../preparations';
import * as tests from '../../tests';

const DATE = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'DATETIME',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Word',
    dbPediaKey: 'Ticker_symbol',
    positiveTests: [
        '05/05/2017',
        '31/01/2017',
        '01/31/2017',
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
    regex: '.{4,}',
    specificity: 1,
    preps: [preparations.trim],
    tests: [tests.date],
};

export default DATE;
