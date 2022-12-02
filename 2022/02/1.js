import input from './input.js'

let points = 0
let value = {
    X: 1,
    Y: 2,
    Z: 3,
}
let rules = {
    A:{ X: 3, Y: 6, Z: 0,},
    B:{ X: 0, Y: 3, Z: 6,},
    C:{ X: 6, Y: 0, Z: 3,},
}
input.split('\n')
    .forEach((line)=>{
        let opponent
        points += line.split(' ').reduce((acc, item, index)=>{
            if(index === 0) {
                opponent = item
                return acc
            }
            return rules[opponent][item] + value[item]
        },0)
    })

console.log(points)