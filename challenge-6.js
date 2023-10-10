import prompt from 'read-console-input'

console.log(räknaTecken())

function räknaTecken() {
    let letters = 0
    let numbers = 0
    const userString = prompt('Skriv in en text: ')
    let charactersArray = userString.split('');
    for (let i = 0; i < charactersArray.length; i++) {
        if (parseInt(charactersArray[i])) {
            numbers++
        } else if (charactersArray[i] !== ' ') {
            letters++
        }
    }
    return(`Bokstäver: ${letters}, Siffror: ${numbers}`)
}