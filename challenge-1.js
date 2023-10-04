import prompt from 'read-console-input'

let array = [7, 2, 3, 8]

console.log(changeArray(array));

function changeArray (array) {
    const indexOne = prompt('Index 1: ')
    const indexTwo = prompt('Index 2: ') 
    const indexOneOldValue = array[indexOne]
    array[indexOne] = array[indexTwo]
    array [indexTwo] = indexOneOldValue

    return(array)
}