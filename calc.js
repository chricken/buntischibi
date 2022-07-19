'use strict';

const calc = {
    clamp({
        value = 50,
        min = 0,
        max = 100
    } = {}) {
        value = Math.min(value, max);
        value = Math.max(value, min);
        return value;
    },

    createNumber(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    }
}

export default calc;