/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions, quotes,
prefer-template */

import { expect } from 'chai';
import _ from 'lodash';

import practicalDataTypesDefinitions from '../index';

describe('(index)', function () {
    it('should be an object', function () {
        expect(practicalDataTypesDefinitions).to.be.ok;
        expect(typeof practicalDataTypesDefinitions).to.equal('object');
    });
    describe('tests', function () {
        _.forOwn(practicalDataTypesDefinitions, (dataType, key) => {
            describe('for dataType ' + key, function () {
                it('must have a regex, positive and negativeTests', function () {
                    expect(dataType.regex).to.be.ok;
                    expect(dataType.positiveTests).to.be.ok;
                    expect(dataType.positiveTests.length).to.be.ok;
                    expect(dataType.negativeTests.length).to.be.ok;
                });
                _.forEach(dataType.positiveTests, positiveTest => {
                    it('should pass the regex test for ' + positiveTest, function () {
                        const regex = new RegExp(dataType.regex);
                        expect(regex.test(positiveTest)).to.be.true;
                    });
                });
                _.forEach(dataType.negativeTests, negativeTest => {
                    it('should fail the regex test for ' + negativeTest, function () {
                        const regex = new RegExp(dataType.regex);
                        expect(regex.test(negativeTest)).to.be.false;
                    });
                });
            });
        });
    });
});
