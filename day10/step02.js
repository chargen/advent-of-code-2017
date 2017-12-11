"use strict";

var fs = require('fs'),
    list = Array.from(Array(256)).map(function (v,i) { return i; }),
    input = fs.readFileSync('./input.txt', 'utf8').trim().split('').map(v => v.charCodeAt(0));

input.push(17,31,73,47,23);

// processing

var currentPosition = 0,
    listLength = list.length,
    rounds = 64,
    length,
    halfLength,
    index1,
    index2,
    tmp,
    i,
    k;

for (i = 0; i < input.length * rounds; i++) {
    length = input[i % input.length];
    halfLength = length / 2 | 0;

    for (k = 0; k < halfLength; k++) {
        index1 = (currentPosition + k) % listLength;
        index2 = (currentPosition + length - k - 1) % listLength;
        tmp = list[index1];

        list[index1] = list[index2];
        list[index2] = tmp;
    }

    currentPosition = currentPosition + i + length;
}

// hash string generation

var hashStr = '',
    hashValue = 0;

for (i = 0; i < list.length; i++) {
    hashValue ^= list[i];

    if (i % 16 === 15) {
        hashStr += ('0' + hashValue.toString(16)).substr(-2);
        hashValue = 0;
    }
}

console.log(hashStr);

process.exit();