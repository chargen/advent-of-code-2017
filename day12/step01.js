"use strict";

var input = require('./get-input')('./input.txt');

function getNumberGroupedWith (id, schema) {
    var read = new Uint8Array(schema.length),
        sum = 0;

    function _recurse (key) {
        read[key]++;
        sum++;

        for (var i = 0; i < schema[key].length; i++) {
            if (read[schema[key][i]] === 0) {
                _recurse(schema[key][i]);
            }
        }
    }

    _recurse(id);

    return sum;
}

console.log(getNumberGroupedWith(0, input));