import prompt from 'read-console-input'

const ans = Math.floor(Math.random() * 100)
let guess = Number(prompt('Gissa på ett heltal mellan 0 och 100: '))
let success = false
let tries = 0

console.log(gissaNummret());

function gissaNummret() {
    if (success) {
        console.log(`Du gissade rätt på ${tries} försök!`);
    } else {
        if (guess < ans) {
            guess = Number(prompt(`Talet är större än ${guess}, gissa igen: `));
        } else if (guess > ans) {
            guess = Number(prompt(`Talet är mindre än ${guess}, gissa igen: `));
        } else {
            success = true
        }
        tries++
        gissaNummret()
    }
}