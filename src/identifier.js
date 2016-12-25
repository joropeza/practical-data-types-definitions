import _ from 'lodash';

import definitions from './definitions';

const identifier = input =>
    _.reduce(definitions, (identifiedDataTypes, dataType, key) => {
        const preppedInput = _.reduce(dataType.preps, (result, prep) => prep(result)
            , input);

        const testResults = _.map(dataType.tests, (test) =>
            test(preppedInput, dataType.regex));

        if (_.every(testResults)) {
            identifiedDataTypes.push(key);
        }

        return identifiedDataTypes;
    }, []);

export default identifier;
