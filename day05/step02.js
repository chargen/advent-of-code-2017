
var input = require('fs').readFileSync('./input.txt', 'utf8').trim().split(/[\r\n]+/g).map(v => +v);

var pos = 0,
    steps = 0,
    move;

while (true) {
    move = input[pos];
    if (move > 2) {
        input[pos]--;
    } else {
        input[pos]++;
    }
    steps++;
    pos+= move;

    if (pos < 0 || pos > input.length - 1) {
        break;
    }
}

console.log(steps);