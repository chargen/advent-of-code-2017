"use strict";

var input = require('./get-input')();

// build child => parent mapping

var childParentMapping = {};

for (var key in input) {
    var element = input[key];

    for (var i = 0; i < element.children.length; i++) {
        childParentMapping[element.children[i]] =  key;
    }

    if (!childParentMapping.hasOwnProperty(key)) {
        childParentMapping[key] =  null;
    }
}

var root;

for (var key in input) {
    if (childParentMapping[key] === null) {
        root = key;
        break;
    }
}

console.log(root);