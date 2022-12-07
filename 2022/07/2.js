import input from './input.js'
import getTree from "./getTree.js";

let TOTAL_DISK_SPACE = 70000000
let SPACE_NEEDED = 30000000
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

let spaceAvailable = TOTAL_DISK_SPACE - pathSizes['/']
let spaceToDelete = SPACE_NEEDED - spaceAvailable

let candidates = Object.keys(pathSizes)
    .map((path)=>{
        return {
            path,
            size: pathSizes[path],
        }
    })
    .filter((item)=>item.size >= spaceToDelete)
    .sort((a, b) => b.size-a.size)

console.log(candidates,candidates[candidates.length-1].size)
