
var input = require('fs').readFileSync('./input.txt', 'utf8').trim().split(/\t/g).map(v => +v);

var hashes = {},
    iteration = 0,
    maxValue,
    maxIndex,
    hash,
    i;

hashes[input.join('-')] = iteration;

while(true) {
    iteration++;

    maxIndex = 0;
    maxValue = -1;

    for (i = 0; i < input.length; i++) {
        if (maxValue < input[i]) {
            maxValue = input[i];
            maxIndex = i;
        }
    }

    input[maxIndex] = 0;
    for (i = 1; i <= maxValue; i++) {
        input[(maxIndex + i) % input.length]++;
    }

    hash = input.join('-');

    if (hashes.hasOwnProperty(hash)) {
        break;
    }

    hashes[hash] = iteration;
}

console.log(iteration);