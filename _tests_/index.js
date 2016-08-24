import { expect } from 'chai';

import practicalDataTypesDefinitions from '../index';

describe('(index)', function() {
    it('should be an object', function() {
        expect(practicalDataTypesDefinitions).to.be.ok;
        expect(typeof practicalDataTypesDefinitions).to.equal('object');
    });
});
