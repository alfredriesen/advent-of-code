import input from './input.js'

let inputBuffer = input.split('')
let distinctChars = 14
let i
for (i = 0; i < inputBuffer.length-(distinctChars-1); i++) {
    let uniqueSequence = inputBuffer.slice(i,i+distinctChars)
    if([...new Set(uniqueSequence)].length === distinctChars) {
        break
    }
}
console.log(i+distinctChars)