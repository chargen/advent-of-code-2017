"use strict";

var fs = require('fs');

module.exports = function getInput () {
    var input = fs.readFileSync('./input.txt', 'utf8').trim().split(/[\r\n]+/g);

    input = input.reduce(function (acc, line) {
        var match = line.match(/^([a-z]+) \(([0-9]+)\)(| -> (.*))$/);

        acc[match[1]] = {
            weight: +match[2],
            children: match[4] ? match[4].split(', '): []
        };

        return acc;
    }, {});

    return input;
};
