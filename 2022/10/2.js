import input from './input.js'
import {next,} from "./helper.js";

let x = 1
let cycles = 0
let signals = []
const OFFSET = 20
const CYCLE_STOP = 40
let CRT = ''

let nextCycle = () => {
    cycles++
    drawPixel(cycles%CYCLE_STOP)
    if((cycles + OFFSET)%CYCLE_STOP === 0) {
        signals.push(x)
    }
    if(cycles%CYCLE_STOP === 0) {
        drawNewLine()
    }
}

let drawPixel = (cycles) => {

    CRT += cycles === x || cycles === (x + 1) || cycles === (x + 2) ? "#" : '.'
}

let drawNewLine = () => {
    CRT += "\n"
}


for (const pos of next({input})) {
    if(isNaN(pos)) {
        nextCycle()
    } else if(pos) {
        for (let i = 0; i < 2; i++) {
            nextCycle()
            if(i===1) {
                x += pos
            }
        }
    }
}
console.log(signals
    .map((signal,index)=>signal*(index * CYCLE_STOP + OFFSET))
    .reduce((acc,strength)=>acc+=strength,0)
)
console.log(CRT)
