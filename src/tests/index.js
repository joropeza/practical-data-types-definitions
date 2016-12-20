export const regex = (input, test) => {
    const regexTest = new RegExp(test);
    return regexTest.test(input);
};
