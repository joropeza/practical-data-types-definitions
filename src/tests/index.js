import countryLibrary from 'countryjs';
import { subregions, regions } from 'all-the-regions';

export const regex = (input, test) => {
    const regexTest = new RegExp(test);
    return regexTest.test(input);
};

export const country = (input) => !!countryLibrary.info(input, 'name');

export const subregion = (input) => !!subregions[input];
export const region = (input) => !!regions[input];
