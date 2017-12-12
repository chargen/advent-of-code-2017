"use strict";

var input = require('./get-input')('./input.txt');

function getNumberOfGroups (schema) {
    var read = new Uint8Array(schema.length),
        sum = 0,
        i;

    function _recurse (key) {
        read[key]++;

        for (var i = 0; i < schema[key].length; i++) {
            if (read[schema[key][i]] === 0) {
                _recurse(schema[key][i]);
            }
        }
    }

    for (i = 0; i < schema.length; i++) {
        if (read[i] === 0) {
            _recurse(i);
            sum++;
        }
    }

    return sum;
}

console.log(getNumberOfGroups(input));