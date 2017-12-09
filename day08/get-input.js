"use strict";

var fs = require('fs');

module.exports = function getInput (filepath) {
    var input = fs.readFileSync(filepath, 'utf8').trim().split(/[\r\n]+/g);

    var operationsDictionary = {
            'inc' : function (a, b) { return a + b; },
            'dec' : function (a, b) { return a - b; },
            '==': function (a, b) { return a === b; },
            '!=': function (a, b) { return a !== b; },
            '>': function (a, b) { return a > b; },
            '<': function (a, b) { return a < b; },
            '>=': function (a, b) { return a >= b; },
            '<=': function (a, b) { return a <= b; },
        },
        operations = [],
        operationMapping = {},
        registers = [],
        registerMapping = {};

    function getOperationIndex (operationName) {
        var operationIndex;

        if (operationMapping.hasOwnProperty(operationName)) {
            operationIndex = operationMapping[operationName];
        } else {
            operationIndex = operations.length;
            operations.push(operationsDictionary[operationName]);
            operationMapping[operationName] = operationIndex;
        }

        return operationIndex;
    }

    function getRegisterIndex (registerName) {
        var registerIndex;

        if (registerMapping.hasOwnProperty(registerName)) {
            registerIndex = registerMapping[registerName];
        } else {
            registerIndex = registers.length;
            registers.push(0);
            registerMapping[registerName] = registerIndex;
        }

        return registerIndex;
    }

    var commands = new Int32Array(input.length * 6),
        match,
        i;

    for (i = 0; i < input.length; i++) {
        match = input[i].match(/^([a-z]+) (inc|dec) (-?[0-9]+) if ([a-z]+) (==|<|>|>=|<=|!=) (-?[0-9]+)$/);
        commands[i * 6] = getOperationIndex(match[5]); // condition op index
        commands[i * 6 + 1] = getRegisterIndex(match[4]); // condition register index
        commands[i * 6 + 2] = +match[6]; // condition value
        commands[i * 6 + 3] = getOperationIndex(match[2]); // operation op index
        commands[i * 6 + 4] = getRegisterIndex(match[1]); // operation register index
        commands[i * 6 + 5] = +match[3]; // operation value
    }

    return [operations, new Int32Array(registers), commands];
};