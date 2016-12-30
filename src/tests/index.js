import countryLibrary from 'countryjs';

export const regex = (input, test) => {
    const regexTest = new RegExp(test);
    return regexTest.test(input);
};

export const country = (input) => !!countryLibrary.info(input, 'name');
