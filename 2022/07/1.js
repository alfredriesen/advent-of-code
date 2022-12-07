import input from './input.js'
import getTree from "./getTree.js";

let MAX_SIZE = 100000
let pathSizes = {}
const calcPaths = function (tree, path = '/') {
    if (typeof pathSizes[path] === 'undefined') {
        pathSizes[path] = 0
    }

    for (let i = 0; i < Object.keys(tree).length; i++) {
        let name = Object.keys(tree)[i]
        let child = tree[name]
        if (typeof child === 'object') {
            pathSizes[path] += calcPaths(child, path + name + '/')
        } else {
            pathSizes[path] += child
        }
    }

    return pathSizes[path]
}

calcPaths(getTree(input))
console.log(Object.values(pathSizes)
    .filter(pathSize => pathSize <= MAX_SIZE)
    .reduce((acc, pathSize) => {
        return acc + pathSize
    }, 0))
