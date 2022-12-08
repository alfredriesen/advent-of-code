import input from './input.js'
import {buildMap, getColNums, getRowNums} from "./helper.js";

Array.prototype.checkVisibility = function (tree) {
    let visibility = false
    const isMin = (num) => num<tree
    for (let i = 0; i < this.length; i++) {
        visibility = isMin(this[i])
        if(!visibility) {
            break
        }
    }
    return visibility
}

let visibilityCount = 0
const map = buildMap(input)
const treeVisibility = []

for (let i = 0; i < map.length; i++) {
    treeVisibility[i] = []
    for (let j = 0; j < map[i].length; j++) {
        if(i === 0 || j === 0 || j === map[i].length - 1 || i === map.length - 1) {
            treeVisibility[i][j] = true
        } else {
            treeVisibility[i][j] =
                getRowNums(map,i,j).checkVisibility(map[i][j]) ||
                getColNums(map,j,i).checkVisibility(map[i][j]) ||
                getRowNums(map,i,j,false).checkVisibility(map[i][j]) ||
                getColNums(map,j,i,false).checkVisibility(map[i][j])
        }
        treeVisibility[i][j] && visibilityCount++
    }
}

console.log(visibilityCount)
