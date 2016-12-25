/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions, quotes,
prefer-template */

import { expect } from 'chai';
import _ from 'lodash';

import definitions from '../src/definitions';

import identifier from '../src/identifier';

describe('(identifier)', function () {
    it('should identify a single letter', function () {
        const input = 'a';
        const expectedOutput = ['LETTER', 'WORD'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
});
