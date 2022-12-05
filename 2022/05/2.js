import input from './input.js'
import stacks from "./stacks.js";

input.split('\n')
    .forEach((line) => {
        let matches = line.match(/move (?<crate>\d+) from (?<startStack>\d) to (?<endStack>\d)/)
        let {crate,startStack,endStack,} = matches.groups
        let crateMoved = stacks[startStack].splice(-crate)
        stacks[endStack].push(...crateMoved)
    })

console.log(Object.values(stacks).map((stack)=>stack.pop()).join(''))