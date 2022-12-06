import input from './input.js'

let inputBuffer = input.split('')

let i
for (i = 0; i < inputBuffer.length-3; i++) {
    let uniqueSequence = inputBuffer.slice(i,i+4)
    if([...new Set(uniqueSequence)].length === 4) {
        break
    }
}
console.log(i+4)