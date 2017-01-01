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
    it('should identify a single capital letter', function () {
        const input = 'A';
        const expectedOutput = ['LETTER', 'WORD', 'TICKER_SYMBOL'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
    it('should identify a short lowercase word', function () {
        const input = 'assamoa';
        const expectedOutput = ['WORD'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
    it('should identify a short word', function () {
        const input = 'Astral';
        const expectedOutput = ['WORD', 'NAME'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
    it('should identify a short all caps word', function () {
        const input = 'ASAMOA';
        const expectedOutput = ['WORD', 'TICKER_SYMBOL'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
    it('should identify a name', function () {
        const input = 'Southeast Asia';
        const expectedOutput = ['NAME', 'SUBREGION'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
    it('should identify a country name', function () {
        const input = 'Germany';
        const expectedOutput = ['WORD', 'NAME', 'COUNTRY'];

        const output = identifier(input);

        expect(output).to.deep.equal(expectedOutput);
    });
});
