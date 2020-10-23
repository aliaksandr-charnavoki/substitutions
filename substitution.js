const VALUES_H = {
    M: 'M',
    P: 'P',
    T: 'T'
};

const BASE_RULES_H = {
    'true true false': () => VALUES_H.M,
    'true true true': () => VALUES_H.P,
    'false true true': () => VALUES_H.T,
};
const CUSTOM_1_RULES_H = {};
const CUSTOM_2_RULES_H = {
    'true true false': () => VALUES_H.T,
    'true false true': () => VALUES_H.M
};
const BASE_RULES_K = {
    [VALUES_H.M]: (input) =>  input.D + (input.D * input.E / 10),
    [VALUES_H.P]: (input) =>  input.D + (input.D * (input.E - input.F) / 25.5),
    [VALUES_H.T]: (input) =>  input.D - (input.D * input.F / 30)
};
const CUSTOM_1_RULES_K = {
    [VALUES_H.P]: (input) =>  2 * input.D + (input.D * input.E / 100)
};
const CUSTOM_2_RULES_K = {
    [VALUES_H.M]: (input) =>   input.F + input.D + (input.D * input.E / 100)
};

export const assign = (input) => {
    const bool_values = [input.A.toString(), input.B.toString(), input.C.toString()].join(' ');
    let H = null, K = 0;

    if (BASE_RULES_H[bool_values]) {
        H = BASE_RULES_H[bool_values](input)
    }
    if (CUSTOM_1_RULES_H[bool_values]) {
        H = CUSTOM_1_RULES_H[bool_values](input)
    }
    if (CUSTOM_2_RULES_H[bool_values]) {
        H = CUSTOM_2_RULES_H[bool_values](input)
    }

    if (!H) {
        throw Error('[error]');
    }

    K = BASE_RULES_K[H](input);
    if (CUSTOM_1_RULES_K[H]) {
        K = CUSTOM_1_RULES_K[H](input)
    }
    if (CUSTOM_2_RULES_K[H]) {
        K = CUSTOM_2_RULES_K[H](input)
    }
    return {H, K};
};
