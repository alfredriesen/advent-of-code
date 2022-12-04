import input from './input.js'

let sum = 0
input.split('\n')
    .forEach((line) => {
        let pairSections = line.split(',').map((elvSections) => {
            let [start,end] = elvSections.split('-').map((number)=>parseInt(number))
            let allElvSections = []
            for (let i = start; i <= end; i++) {
                allElvSections.push(i)
            }
            return allElvSections
        })
        if(
            pairSections[0].every((section)=>pairSections[1].includes(section)) ||
            pairSections[1].every((section)=>pairSections[0].includes(section))
        ) {
            sum++
        }
    })

console.log(sum)
