"use strict";

module.exports = function getInput (filename) {
    var input = require('fs').readFileSync(filename, 'utf8').trim().split(/[\r\n]+/g),
        processed = new Array(input.length),
        match,
        i;

    for (i = 0; i < input.length; i++) {
        match = input[i].match(/^([0-9]+) <-> ([0-9 ,]+)$/);
        processed[match[1]] = match[2].split(', ').map(v => +v);
    }

    return processed;
};


