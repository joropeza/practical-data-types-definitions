import countryLibrary from 'countryjs';
import { subregions, regions } from 'all-the-regions';
import moment from 'moment';

export const regex = (input, test) => {
    const regexTest = new RegExp(test);
    return regexTest.test(input);
};

export const country = (input) => !!countryLibrary.info(input, 'name');

export const subregion = (input) => !!subregions[input];
export const region = (input) => !!regions[input];

export const date = input => (
        moment(input, 'MM/DD/YYYY', true).isValid() ||
        moment(input, 'DD/MM/YYYY', true).isValid()
    );
