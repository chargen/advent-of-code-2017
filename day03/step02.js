// this doesn't really relate to how I resolved the first step and after some searching I could not find a good way
// to do it other than by brute force

var mooreNeighbourhood = [
    [-1,-1], [ 0,-1], [ 1,-1],
    [-1, 0],          [ 1, 0],
    [-1, 1], [ 0, 1], [ 1, 1]
];

var input = 265149;

var n = 11; // honestly don't know how to figure out the minimum spiral radius necessary to reach the expected value
var nn = n*n;
var a = new Float64Array(nn);

var cx = n / 2 | 0;
var cy = n / 2 | 0;

// walking the spiral

var cxa = 1;
var cya = 0;
var direction = 0;
var directions = [1, 0, 0, -1, -1, 0, 0, 1];
var maxEdgeIter = 2;
var edgeIter = 0;

function getValue (x, y) {
    var sum = 0,
        nx,
        ny,
        ni;

    for (var i = 0; i < mooreNeighbourhood.length; i++) {
        nx = x + mooreNeighbourhood[i][0];
        ny = y + mooreNeighbourhood[i][1];
        ni = nx + ny * n;

        if (a.length > ni) {
            sum += a[nx + ny * n];
        }
    }

    return sum;
}

a[cx + cy * n] = 1;

for (var i = 1; i < nn; i++) {
    cx += cxa;
    cy += cya;

    edgeIter++;

    if (edgeIter === (maxEdgeIter / 2 | 0)) {
        edgeIter = 0;
        maxEdgeIter++;
        direction = (direction + 1) % 4;
        cxa = directions[direction * 2];
        cya = directions[direction * 2 + 1];
    }

    var value = getValue(cx, cy);
    a[cx + cy * n] = value;

    if (value > input) {
        console.log(value);
        process.exit();
    }
}

// display spiral code
/*
var str = '';
for (var i = 0; i < nn; i++) {
    str += ('00000000' + a[i]).substr(-8) + ' ';
    if (i % n === n - 1) str += '\n';
}
console.log(str);
*/