var input = require('fs').readFileSync('./input.txt', 'utf8').trim().split(/[\r\n]+/g);

function validatePassphrase (passphrase) {
    var words = passphrase.split(/ +/g);
    var wordsDict = {};

    for (var i = 0; i < words.length; i++) {
        var restructuredWord = words[i].split('').sort().join('');

        if (words.hasOwnProperty(restructuredWord)) {
            return false;
        }

        words[restructuredWord] = true;
    }

    return true;
}

var validPassphrases = 0;

for (var i = 0; i < input.length; i++) {
    validPassphrases += validatePassphrase(input[i]) ? 1 : 0;
}

console.log(validPassphrases);
