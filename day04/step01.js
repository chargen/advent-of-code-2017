var input = require('fs').readFileSync('./input.txt', 'utf8').trim().split(/[\r\n]+/g);

function validatePassphrase (passphrase) {
    var words = passphrase.split(/ +/g);

    for (var i = 0; i < words.length; i++) {
        if (words.lastIndexOf(words[i]) > i) {
            return false;
        }
    }

    return true;
}

var validPassphrases = 0;

for (var i = 0; i < input.length; i++) {
    validPassphrases += validatePassphrase(input[i]) ? 1 : 0;
}

console.log(validPassphrases);
