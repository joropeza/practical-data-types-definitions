import * as preparations from '../preparations';

const LETTER = {
    ECMAScriptPrimitive: 'string',
    ANSIDataType: 'CHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/English_alphabet',
    positiveTests: [
        'a',
        'A',
        'c',
        'Z',
        'A ',
        ' A',
        ' A ',
    ],
    negativeTests: [
        '',
        ' ',
        '0',
        'aa',
        'BB',
        'word',
        'words with spaces',
        'a word',
    ],
    regex: '^[A-Za-z]{1}$',
    preps: [preparations.trim],
    specificity: 1,
};

export default LETTER;
