const next = function* ({input,}) {
    let lines = input.split('\n')
    for (let i = 0; i < lines.length; i++) {
        yield parseInt(lines[i].split(' ')[1])
    }
}

export {
    next,
}