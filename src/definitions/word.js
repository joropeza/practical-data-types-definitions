import * as preparations from '../preparations';
import * as tests from '../tests';

const WORD = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'VARCHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Word',
    positiveTests: [
        'a',
        'ab',
        'apple',
        'help',
        'dfgdfshjgjkdsfghdfskjghdfskgjfdsh',
        'WORD',
    ],
    negativeTests: [
        '',
        '0',
        'a a',
        'words fail',
        'A word.',
        'words and words and words',
        '123',
    ],
    regex: '^[a-zA-Z_]+$',
    preps: [preparations.trim],
    tests: [tests.regex],
    specificity: 1,
};

export default WORD;
