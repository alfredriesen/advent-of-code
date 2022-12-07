export default function (input) {
    const COMMAND_CD = 'cd'

    let tree = {}
    let currentDir
    let parentDirs = []

    input.split('\n').forEach((line) => {
        if (line.startsWith('$')) {
            let [dollar, command, arg] = line.split(' ')
            if (command === COMMAND_CD) {
                switch (arg) {
                    case '/': {
                        currentDir = tree
                        parentDirs.push(currentDir)
                        break
                    }
                    case '..': {
                        currentDir = parentDirs.pop()
                        break
                    }
                    default: {
                        parentDirs.push(currentDir)
                        currentDir = currentDir[arg]
                    }
                }
            }
        } else {
            let [dirOrSize, name] = line.split(' ')
            if (dirOrSize === 'dir') {
                currentDir[name] = {}
            } else {
                currentDir[name] = parseInt(dirOrSize)
            }
        }
    })

    return tree
}