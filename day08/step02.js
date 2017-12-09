"use strict";

const [operations, registers, commands] = require('./get-input')('./input.txt');

let max = 0;

for (let i = 0; i < commands.length; i+= 6) {
    if (operations[commands[i]](registers[commands[i + 1]], commands[i + 2])) {
        const value = operations[commands[i + 3]](registers[commands[i + 4]], commands[i + 5]);
        max = Math.max(max, value);
        registers[commands[i + 4]] = value;
    }
}

console.log(max);