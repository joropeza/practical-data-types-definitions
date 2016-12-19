/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions, quotes,
prefer-template */

import { expect } from 'chai';
import _ from 'lodash';

import practicalDataTypesDefinitions from '../../src/definitions/index';

describe('(index)', function () {
    it('should be an object', function () {
        expect(practicalDataTypesDefinitions).to.be.ok;
        expect(typeof practicalDataTypesDefinitions).to.equal('object');
    });
    describe('tests', function () {
        _.forOwn(practicalDataTypesDefinitions, (dataType, key) => {
            describe('for dataType ' + key, function () {
                it('must have a regex, positive and negativeTests, and a preps collection', function () {
                    expect(dataType.regex).to.be.ok;
                    expect(dataType.positiveTests).to.be.ok;
                    expect(dataType.preps).to.be.ok;
                    expect(dataType.positiveTests.length).to.be.ok;
                    expect(dataType.negativeTests.length).to.be.ok;
                });
                _.forEach(dataType.positiveTests, positiveTest => {
                    it('should pass the regex test for ' + positiveTest, function () {
                        const preppedTest = _.reduce(dataType.preps, (result, prep) => prep(result)
                            , positiveTest);

                        const regex = new RegExp(dataType.regex);
                        expect(regex.test(preppedTest)).to.be.true;
                    });
                });
                _.forEach(dataType.negativeTests, negativeTest => {
                    it('should fail the regex test for ' + negativeTest, function () {
                        const preppedTest = _.reduce(dataType.preps, (result, prep) => prep(result)
                            , negativeTest);

                        const regex = new RegExp(dataType.regex);
                        expect(regex.test(preppedTest)).to.be.false;
                    });
                });
            });
        });
    });
});
