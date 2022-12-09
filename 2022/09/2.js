import input from './input.js'
import {nextHeadPos, getMap, showMap, SHIFT,} from "./helper.js";
let tailPos = {x:0,y:0}
let tailPoints = [tailPos]
let snakePostions = []
for (let i = 0; i < 10; i++) {
    snakePostions.push(JSON.parse(JSON.stringify(tailPos)))
}

const isNextNear = (pos, snakePos) => {
    let nextPos = snakePostions[snakePos]

    let nearByPoints = []
    for (let i = -1; i <= 1 ; i++) {
        for (let j = -1; j <= 1; j++) {
            nearByPoints.push({x:pos.x+i,y:pos.y+j,})
        }
    }
    return !!nearByPoints.some((point)=>(nextPos.x === point.x) && (nextPos.y === point.y))
}

const hasNext = (i) => {
    i++
    return !!snakePostions[i]
}

const drawSnake = (snakePostions) => {
    let copy = JSON.parse(JSON.stringify(snakePostions))
    let map = getMap()
    copy.reverse()
    copy.forEach((point,index)=>{
        map[point.y][point.x+SHIFT] = index === copy.length - 1 ? 'H' : copy.length - index - 1
    })
    console.log(showMap(map))
}

const moveNext = (pos,snakePos) => {
    let nextPos = snakePostions[snakePos]
    let xDistance = Math.abs(pos.x-nextPos.x)
    let yDistance = Math.abs(pos.y-nextPos.y)
    let newNextPos = {}
    if(xDistance > yDistance) {
        nextPos.x < pos.x ?
            newNextPos.x = pos.x - 1 :
            newNextPos.x = pos.x + 1
        newNextPos.y = pos.y
    } else if(xDistance === yDistance) {
        nextPos.x < pos.x ?
            newNextPos.x = pos.x - 1 :
            newNextPos.x = pos.x + 1
        nextPos.y < pos.y ?
            newNextPos.y = pos.y - 1 :
            newNextPos.y = pos.y + 1
    } else {
        newNextPos.x = pos.x
        nextPos.y < pos.y ?
            newNextPos.y = pos.y - 1 :
            newNextPos.y = pos.y + 1
    }
    snakePos===9 && tailPoints.push(newNextPos)
    snakePostions[snakePos] = newNextPos
    if(hasNext(snakePos)) {
        snakePos++
        let needsMove = !isNextNear(newNextPos,snakePos)
        needsMove && moveNext(newNextPos,snakePos)
    }
}

for (const pos of nextHeadPos({input,includeStartPoint:true,everyStep:true})) {
    //drawSnake(snakePostions)
    snakePostions[0]=JSON.parse(JSON.stringify(pos))
    !isNextNear(pos,1) && moveNext(pos,1)
}
//drawSnake(snakePostions)

let uniqueTailsPoins = Array.from(new Set(tailPoints.map((point)=>JSON.stringify(point))))

console.log(uniqueTailsPoins.length)
