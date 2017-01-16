'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _definitions = require('./definitions');

var _definitions2 = _interopRequireDefault(_definitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identifier = function identifier(input) {
    return _lodash2.default.reduce(_definitions2.default, function (identifiedDataTypes, dataType, key) {
        var preppedInput = _lodash2.default.reduce(dataType.preps, function (result, prep) {
            return prep(result);
        }, input);

        var testResults = _lodash2.default.map(dataType.tests, function (test) {
            return test(preppedInput, dataType.regex);
        });

        if (_lodash2.default.every(testResults)) {
            identifiedDataTypes.push(key);
        }

        return identifiedDataTypes;
    }, []);
};

exports.default = identifier;