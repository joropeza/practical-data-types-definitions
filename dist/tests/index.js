'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.date = exports.region = exports.subregion = exports.country = exports.regex = undefined;

var _countryjs = require('countryjs');

var _countryjs2 = _interopRequireDefault(_countryjs);

var _allTheRegions = require('all-the-regions');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regex = exports.regex = function regex(input, test) {
    var regexTest = new RegExp(test);
    return regexTest.test(input);
};

var country = exports.country = function country(input) {
    return !!_countryjs2.default.info(input, 'name');
};

var subregion = exports.subregion = function subregion(input) {
    return !!_allTheRegions.subregions[input];
};
var region = exports.region = function region(input) {
    return !!_allTheRegions.regions[input];
};

var date = exports.date = function date(input) {
    return (0, _moment2.default)(input, 'MM/DD/YYYY', true).isValid() || (0, _moment2.default)(input, 'DD/MM/YYYY', true).isValid();
};