"use strict";

const [operations, registers, commands] = require('./get-input')('./input.txt');

for (let i = 0; i < commands.length; i+= 6) {
    if (operations[commands[i]](registers[commands[i + 1]], commands[i + 2])) {
        registers[commands[i + 4]] = operations[commands[i + 3]](registers[commands[i + 4]], commands[i + 5]);
    }
}

console.log(Math.max(...registers));