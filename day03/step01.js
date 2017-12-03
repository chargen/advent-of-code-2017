function spiralDist(v) {
    var sqr1 = Math.sqrt(v - 1) | 0;
    var c0 = Math.ceil(sqr1 / 2); // "radius"

    var sd = v - (2 * c0 - 1) ** 2;
    var c1 = Math.abs(sd % (2 * c0) - c0); // "distance from axis"

    return c0 + c1;
}

console.log(265149, spiralDist(265149));