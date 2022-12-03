import input from './input.js'

let sum = 0
let group = []
input.split('\n')
    .forEach((line, index) => {
        if([0,1].includes(index%3)) {
            group[index%3] = line
            return
        }
        let firstRucksack = group[0]
        let secondRucksack = group[1]
        let thirdRucksack = line
        let duplicates = firstRucksack.split('').filter((item)=>secondRucksack.includes(item))
        let duplicate = duplicates.find((item)=>thirdRucksack.includes(item))

        let shift = /[a-z]/.test(duplicate) ? 96 : (64 - 26)
        let value = duplicate.charCodeAt() - shift
        sum += value
    })

console.log(sum)
