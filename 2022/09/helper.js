export const SIZE=1000
export const SHIFT=100

const getMap = function () {
    let map = []
    for (let i = 0; i < SIZE; i++) {
        map[i] = []
        for (let j = 0; j < SIZE; j++) {
            map[i][j] = '.'
        }
    }
    return map
}

const showMap = function (map) {
    let stringMap = ''
    map.forEach((line)=>{
        line.forEach((pos)=>{
            stringMap += pos
        })
        stringMap += '\n'
    })
    return stringMap
}

const nextHeadPos = function* ({input,includeStartPoint,everyStep,}) {
    let pos = {x:0,y:0}
    if(includeStartPoint) {
        yield pos
    }
    let lines = input.split('\n')
    for (let i = 0; i < lines.length; i++) {
        let matches = lines[i].match(/(?<dir>[RLUD]) (?<num>\d+)/)
        let {dir,num,} = matches.groups
        num = parseInt(num)
        for (let j = 0; j < num; j++) {
            switch (dir) {
                case 'R': {
                    pos.x ++
                    break
                }
                case 'L': {
                    pos.x --
                    break
                }
                case 'U': {
                    pos.y ++
                    break
                }
                case 'D': {
                    pos.y --
                    break
                }
            }
            if(everyStep) {
                yield pos
            }
        }
        if(!everyStep) {
            yield pos
        }
    }
}

export {
    getMap,
    nextHeadPos,
    showMap,
}