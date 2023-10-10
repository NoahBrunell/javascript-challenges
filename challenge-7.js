import prompt from 'read-console-input'

console.log(räknaTecken())

function räknaTecken() {
    let konsonant = 0
    let vocal = 0
    const userString = prompt('Skriv in en text: ')
    let charactersArray = userString.split('');
    for (let i = 0; i < charactersArray.length; i++) {
        if ((charactersArray[i] == 'a') || 
        (charactersArray[i] == 'e') || 
        (charactersArray[i] == 'i') || 
        (charactersArray[i] == 'o') || 
        (charactersArray[i] == 'u') || 
        (charactersArray[i] == 'y') || 
        (charactersArray[i] == 'å') || 
        (charactersArray[i] == 'ä') || 
        (charactersArray[i] == 'ö') || 
        (charactersArray[i] == 'A') ||
        (charactersArray[i] == 'E') ||
        (charactersArray[i] == 'I') ||
        (charactersArray[i] == 'O') ||
        (charactersArray[i] == 'U') ||
        (charactersArray[i] == 'Y') ||
        (charactersArray[i] == 'Å') ||
        (charactersArray[i] == 'Ä') ||
        (charactersArray[i] == 'Ö')) {
            vocal++
        } else if ((charactersArray[i] == 'b') || 
        (charactersArray[i] == 'c') || 
        (charactersArray[i] == 'd') || 
        (charactersArray[i] == 'f') || 
        (charactersArray[i] == 'g') || 
        (charactersArray[i] == 'h') || 
        (charactersArray[i] == 'j') || 
        (charactersArray[i] == 'k') || 
        (charactersArray[i] == 'l') || 
        (charactersArray[i] == 'm') || 
        (charactersArray[i] == 'n') || 
        (charactersArray[i] == 'o') || 
        (charactersArray[i] == 'p') || 
        (charactersArray[i] == 'q') || 
        (charactersArray[i] == 'r') || 
        (charactersArray[i] == 's') || 
        (charactersArray[i] == 't') || 
        (charactersArray[i] == 'v') || 
        (charactersArray[i] == 'w') || 
        (charactersArray[i] == 'x') || 
        (charactersArray[i] == 'z') || 
        (charactersArray[i] == 'B') ||
        (charactersArray[i] == 'C') ||
        (charactersArray[i] == 'D') ||
        (charactersArray[i] == 'F') ||
        (charactersArray[i] == 'G') ||
        (charactersArray[i] == 'H') ||
        (charactersArray[i] == 'J') ||
        (charactersArray[i] == 'K') ||
        (charactersArray[i] == 'L') ||
        (charactersArray[i] == 'M') ||
        (charactersArray[i] == 'N') ||
        (charactersArray[i] == 'O') ||
        (charactersArray[i] == 'P') ||
        (charactersArray[i] == 'Q') ||
        (charactersArray[i] == 'R') ||
        (charactersArray[i] == 'S') ||
        (charactersArray[i] == 'T') ||
        (charactersArray[i] == 'V') ||
        (charactersArray[i] == 'W') ||
        (charactersArray[i] == 'X') ||
        (charactersArray[i] == 'Z')) {
            konsonant++
        }
    }
    return(`Vocal: ${vocal}, Konsonant: ${konsonant}`)
} 