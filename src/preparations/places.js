import _ from 'lodash';

export const subregionSynonyms = (input) => {
    const cleanInput = _.toLower(input.replace(/\W/g, ''));
    const translations = {
        southeastasia: 'South-Eastern Asia',
        southeasternasia: 'South-Eastern Asia',
        seasia: 'South-Eastern Asia',
        northamerica: 'Northern America',
    };
    return translations[cleanInput] || input;
};
