import input from './input.js'
import {buildMap, getColNums, getRowNums} from "./helper.js";

Array.prototype.getDistance = function (tree) {
    let visibility = 0
    let highest = 0
    for (let i = 0; i < this.length; i++) {
        (i !== 0 || this[i] !== 0) && visibility++
        if(highest < this[i]) {
            highest = this[i]
        }
        if(highest >= tree) {
            break
        }
    }
    return visibility
}

let maxDistance = 0
const map = buildMap(input)
const treeVisibility = []

for (let i = 0; i < map.length; i++) {
    treeVisibility[i] = []
    for (let j = 0; j < map[i].length; j++) {
        if(i === 0 || j === 0 || j === map[i].length - 1 || i === map.length - 1) {
            treeVisibility[i][j] = 0
        } else {
            treeVisibility[i][j] =
                getRowNums(map,i,j).getDistance(map[i][j]) *
                getColNums(map,j,i).getDistance(map[i][j]) *
                getRowNums(map,i,j,false).getDistance(map[i][j]) *
                getColNums(map,j,i,false).getDistance(map[i][j])
        }
        if(maxDistance < treeVisibility[i][j]) {
            maxDistance = treeVisibility[i][j]
        }
    }
}

console.log(maxDistance)
