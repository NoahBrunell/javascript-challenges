import prompt from 'read-console-input'

console.log(fakultet());

function fakultet() {
    const n = Number(prompt('Skriv ett heltal större än noll: '))
    let ans = 1
    if (n > 0) {
        for (let i = n; i > 0; i -= 1) {
            ans = ans * i
        }
        return('Fakulteten (n!) är: ' + ans)
    } else {
        fakultet()
    }
}