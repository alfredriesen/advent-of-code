import input from './input.js'

let sum = 0
input.split('\n')
    .forEach((line) => {
        let firstCompartment = line.slice(0,line.length/2)
        let secondCompartment = line.slice(line.length/2,line.length)
        let duplicate = firstCompartment.split('').find((item)=>secondCompartment.includes(item))
        let shift = /[a-z]/.test(duplicate) ? 96 : (64 - 26)
        let value = duplicate.charCodeAt() - shift
        sum += value
    })

console.log(sum)
