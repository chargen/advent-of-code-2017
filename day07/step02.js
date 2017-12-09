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

function recurse (elementKey) {
    var element = input[elementKey],
        weight = element.weight,
        subWeights = [],
        i, k;

    for (i = 0; i < element.children.length; i++) {
        var subElementWeight = recurse(element.children[i]);
        subWeights.push([element.children[i], subElementWeight]);
        weight+= subElementWeight;
    }

    for (i = 0; i < subWeights.length; i++) {
        var diff = 0,
            offset = 0;

        for (k = 0; k < subWeights.length; k++) {
            diff += (subWeights[i][1] !== subWeights[k][1] ? 1 : 0);
        }

        if (diff > 1) {
            throw new Error(
                subWeights[i][0] + ' should have weight ' +
                (input[subWeights[i][0]].weight + subWeights[(i + 1) % subWeights.length][1] - subWeights[i][1])
            );
        }
    }


    return weight;
}

try {
    recurse(root);
} catch (e) {
    console.log(e.message);
}