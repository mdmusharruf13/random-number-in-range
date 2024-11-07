function randomNumberInRange(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Both min and max should be numbers.');
    }

    if (min > max) {
        throw new RangeError('Min should be less than or equal to max.');
    }

    return Math.floor(Math.random() * (max - min));
}

module.exports = randomNumberInRange;