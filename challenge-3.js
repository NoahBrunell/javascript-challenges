import prompt from 'read-console-input'

console.log(fibonacci());

function fibonacci() {
    const n = Number(prompt('Hur många fibonacci tal vill du generera: '))
    let ans = [0, 1]
    let arrayIndex = 2

    if (n > 0) {
        for (let i = 0; i < (n - 2); i++) {
            ans[arrayIndex] = ans[arrayIndex-1] + ans[arrayIndex-2]
            arrayIndex++
        }
    } else {
        fibonacci()
    } 
    return(ans)
}

