'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _letter = require('./letter');

var _letter2 = _interopRequireDefault(_letter);

var _word = require('./word');

var _word2 = _interopRequireDefault(_word);

var _tickerSymbol = require('./strings/tickerSymbol');

var _tickerSymbol2 = _interopRequireDefault(_tickerSymbol);

var _name = require('./strings/name');

var _name2 = _interopRequireDefault(_name);

var _country = require('./places/country');

var _country2 = _interopRequireDefault(_country);

var _subregion = require('./places/subregion');

var _subregion2 = _interopRequireDefault(_subregion);

var _region = require('./places/region');

var _region2 = _interopRequireDefault(_region);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    LETTER: _letter2.default,
    WORD: _word2.default,
    TICKER_SYMBOL: _tickerSymbol2.default,
    NAME: _name2.default,
    COUNTRY: _country2.default,
    SUBREGION: _subregion2.default,
    REGION: _region2.default
};