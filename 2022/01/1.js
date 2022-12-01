import input from './input.js'

let elves_calories = []

let i = 0
input.split('\n')
    .forEach((line)=>{
        if(!line.trim()) {
            i++
            return
        }
        elves_calories[i] = (elves_calories[i] || 0) + parseInt(line)
    })

let elves_calories_sorted = elves_calories.sort((a, b) => b-a)

console.log(elves_calories_sorted[0])

export {
    elves_calories_sorted,
}
