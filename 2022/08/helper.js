const buildMap = function (input) {
    let map = []
    input.split('\n').forEach((line)=>{
        map.push(line.split('').map((num)=>parseInt(num)))
    })
    return map
}

const getRowNums = function (map, i, j, left = true) {
    let row = Array.from(map[i])
    if(left) {
        return row.slice(0,j).reverse()
    } else {
        return row.slice(j+1,row.length)
    }
}

const getColNums = function (map, j, i, up = true) {
    let col = []
    for (let k = 0; k < map.length; k++) {
        if(up) {
            k < i && k !== i && col.push(map[k][j])
        } else {
            k > i && k !== i && col.push(map[k][j])
        }
    }
    return up ? col.reverse() : col
}

export {
    buildMap,
    getColNums,
    getRowNums,
}