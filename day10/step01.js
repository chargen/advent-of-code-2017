"use strict";

var fs = require('fs'),
    list = Array.from(Array(256)).map(function (v,i) { return i; }),
    input = fs.readFileSync('./input.txt', 'utf8').trim().split(',').map(v => +v);

var currentPosition = 0;

var listLength = list.length;

for (var i = 0; i < input.length; i++) {
    var length = input[i],
        halfLength = length / 2 | 0;

    for (var k = 0; k < halfLength; k++) {
        var index1 = (currentPosition + k) % listLength;
        var index2 = (currentPosition + length - k - 1) % listLength;
        var tmp = list[index1];

        list[index1] = list[index2];
        list[index2] = tmp;
    }

    currentPosition = currentPosition + i + length;
}

console.log(list[0] * list[1]);

process.exit();