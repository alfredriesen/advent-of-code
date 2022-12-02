import input from './input.js'

let points = 0
let value = {
    X: 1,
    Y: 2,
    Z: 3,
}
let rules = {
    A:{ X: 0, Y: 3, Z: 6,},
    B:{ X: 0, Y: 3, Z: 6,},
    C:{ X: 0, Y: 3, Z: 6,},
}
let map = {
    A:{ X: 'Z', Y: 'X', Z: 'Y',},
    B:{ X: 'X', Y: 'Y', Z: 'Z',},
    C:{ X: 'Y', Y: 'Z', Z: 'X',},
}
input.split('\n')
    .forEach((line)=>{
        let opponent
        points += line.split(' ').reduce((acc, item, index)=>{
            if(index === 0) {
                opponent = item
                return acc
            }
            return rules[opponent][item] + value[map[opponent][item]]
        },0)
    })

console.log(points)