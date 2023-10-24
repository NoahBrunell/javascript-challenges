import prompt from 'read-console-input'

findFactorial()

function findFactorial() {
    const number = prompt('Skriv ett tal: ')
    let array = []
    for (let i = 1; i <= number; i++) {
        if (number / i == (number / i).toFixed(0)) {
            array.push(i)
            console.log(`${i}    *    ${number / i}    =    ${number}`);
        }
    }
}