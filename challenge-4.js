import prompt from 'read-console-input'

console.log(medeltal());

function medeltal() {
    let numbers = []
    let sum = 0
    for (let i = 0; i < 5; i++) {
        numbers[i] = Number(prompt(`Nummer ${i + 1}: `))
    }
    for (let i = 0; i < 5; i++) {
        sum = sum + numbers[i]
    }
    let ans = sum / 5
    return(ans)
}