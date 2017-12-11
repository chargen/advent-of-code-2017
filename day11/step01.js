"use strict";

var input = require('fs').readFileSync('./input.txt', 'utf8').trim().split(',');

var directions = {
    'nw': [-1,0],
    'se': [1,0],
    'n': [-1,1],
    'ne': [0,1],
    'sw': [0,-1],
    's': [1,-1]
};

var x = 0,
    y = 0,
    dir,
    i;

function getHexDistance(x, y) {
    var length;

    if (Math.sign(x) !== Math.sign(y)) {
        length = Math.max(Math.abs(x), Math.abs(y));
    } else {
        length = Math.abs(x) + Math.abs(y);
    }

    return length;
}

for (i = 0; i < input.length; i++) {
    dir = directions[input[i]];
    x+= dir[0];
    y+= dir[1];
}

console.log(x, y, getHexDistance(x, y));