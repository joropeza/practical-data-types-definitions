import * as preparations from '../../preparations';
import * as tests from '../../tests';

const TICKER_SYMBOL = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'VARCHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Word',
    dbPediaKey: 'Ticker_symbol',
    positiveTests: [
        'A',
        'AA',
        'AAPL',
        'TWTR',
        'SPY',
    ],
    negativeTests: [
        '',
        '0',
        'aa',
        'word',
        'words with spaces',
        'a word',
    ],
    regex: '^[A-Z_]+$',
    specificity: 100,
    preps: [preparations.trim],
    tests: [tests.regex],
};

export default TICKER_SYMBOL;
