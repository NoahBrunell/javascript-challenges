import prompt from 'read-console-input'

console.log(checkPrimeNumber());

function checkPrimeNumber() {
    const number = prompt('Skriv ett tal: ')
    let prime = true
    if (number <= 3) {
        return(`${number} är ett primtal!`)
    } else {
        for (let i = 2; i < number; i++) {
            if (number / i == (number / i).toFixed(0)) {
                prime = false
            }
        }
    }
    if (prime == true) {
        return(`${number} är ett primtal!`)
    } else {
        return(`${number} är inte ett primtal!`)
    }
}