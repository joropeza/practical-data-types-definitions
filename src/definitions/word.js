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
    ],
    negativeTests: [
        '',
        '0',
        'a a',
        'words fail',
        'words and words and words',
        '123',
    ],
    regex: '^[a-zA-Z_]+$',
    specificity: 1,
};

export default WORD;
