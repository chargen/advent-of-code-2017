"use strict";

var input = require('fs').readFileSync('./input.txt', 'utf8').trim();

var inGarbage = 0,
    inGroup = 0,
    score = 0,
    keptCharacters = 0,
    char,
    pos;

for (pos = 0; pos < input.length; pos++) {
    char = input[pos];

    if (char === '!') {
        pos++;
    } else if (inGarbage) {
        if (char === '>') {
            inGarbage--;
        } else {
            keptCharacters++;
        }
    } else {
        if (char === '<') {
            inGarbage = 1;
        } else if (char === '{') {
            inGroup++;
        } else if (inGroup && char === '}') {
            score += inGroup;
            inGroup--;
        }
    }
}

console.log(score, keptCharacters);