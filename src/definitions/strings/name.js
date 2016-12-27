import * as preparations from '../../preparations';
import * as tests from '../../tests';

const NAME = {
    ECMAScriptPrimitive: 'string',
    definition: 'a word or set of words by which a person, animal, place, or ' +
        'thing is known, addressed, or referred to',
    ANSIDataType: 'VARCHAR',
    wikipediaLink: 'https://en.wikipedia.org/wiki/Name',
    dbPediaKey: 'Name',
    positiveTests: [
        'Angelo',
        'Jon Oropeza',
        'Southeast Asia',
        'John Paul Jones',
        'Apple Inc.',
        'Microsoft Corporation',
        'Donald J. Trump',
        'Sam O\'Malley',
        'Connor Boatwick-Jackson',
        'Mr. Rielly',
    ],
    negativeTests: [
        '',
        '0',
        'aa',
        'word',
        'words with spaces',
        'a word',
        'A B C D E F G H I J K',
        'JEFF Martins',
        'JEdd Martins',
    ],
    regex: '(?!^.*[A-Z]{2,}.*$)^[A-Z][a-z]+((\\s)?((\'|\\-|\\.)?([A-Za-z]|\\.)+))*$',
    specificity: 10,
    preps: [preparations.trim],
    tests: [tests.regex],
};

export default NAME;
