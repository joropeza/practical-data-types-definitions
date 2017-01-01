import countryLibrary from 'countryjs';
import _ from 'lodash';
import { subregions } from 'all-the-regions';

export const regex = (input, test) => {
    const regexTest = new RegExp(test);
    return regexTest.test(input);
};

export const country = (input) => !!countryLibrary.info(input, 'name');

export const subregion = (input) => {
    return !!subregions[input];
};
