'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subregion = exports.country = exports.regex = undefined;

var _countryjs = require('countryjs');

var _countryjs2 = _interopRequireDefault(_countryjs);

var _allTheRegions = require('all-the-regions');

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