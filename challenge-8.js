import prompt from 'read-console-input'

console.log(checkPalindrome());

function checkPalindrome() {
    let forwardPhrase = prompt('Skriv en fras: ')
    let backwardPhrase = ''
    let forwardArray = forwardPhrase.split('')
    let backwardArray = []
    for (let i = 0; i < forwardPhrase.length; i++) {
        backwardArray[i] = forwardArray[forwardPhrase.length - (i + 1)]
    }
    for (let i = 0; i < backwardArray.length; i++) {
        backwardPhrase = backwardPhrase + backwardArray[i]
    }
    if (forwardPhrase = backwardPhrase) {
        return('Frasen är ett plaindrom')
    } else {
        return('Frasen är inte ett plaindrom')
    }
}