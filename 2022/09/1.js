import input from './input.js'
import {nextHeadPos,} from "./helper.js";
let tailPos = {x:0,y:0}
let tailPoints = [tailPos]

const isTailNear = (pos) => {
    let nearByPoints = []
    for (let i = -1; i <= 1 ; i++) {
        for (let j = -1; j <= 1; j++) {
            nearByPoints.push({x:pos.x+i,y:pos.y+j,})
        }
    }
    return nearByPoints.some((point)=>(tailPos.x === point.x) && (tailPos.y === point.y))
}

const moveTail = (pos) => {
    let xDistance = Math.abs(pos.x-tailPos.x)
    let yDistance = Math.abs(pos.y-tailPos.y)
    let newTailPos = {}
    if(xDistance > yDistance) {
        tailPos.x < pos.x ?
            newTailPos.x = pos.x - 1 :
            newTailPos.x = pos.x + 1
        newTailPos.y = pos.y
    } else {
        newTailPos.x = pos.x
        tailPos.y < pos.y ?
            newTailPos.y = pos.y - 1 :
            newTailPos.y = pos.y + 1
    }
    tailPoints.push(newTailPos)
    tailPos = newTailPos
}

for (const pos of nextHeadPos({input,includeStartPoint:true,everyStep:true})) {
    !isTailNear(pos) && moveTail(pos)
}

let uniqueTailsPoins = Array.from(new Set(tailPoints.map((point)=>JSON.stringify(point))))

console.log(uniqueTailsPoins.length)
