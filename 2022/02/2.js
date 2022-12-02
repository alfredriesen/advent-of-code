import input from './input.js'

let points = 0
input.split('\n')
    .forEach((line)=>{
        let opponent
        points += line.split(' ').reduce((acc, item, index)=>{
            if(index === 0) {
                opponent = item
                return acc
            }
            switch (opponent) {
                case 'A' : {
                    switch (item) {
                        case 'X' : {
                            return 3;
                        }
                        case 'Y' : {
                            return 3 + 1;
                        }
                        case 'Z' : {
                            return 6 + 2;
                        }
                    }
                    break
                }
                case 'B' : {
                    switch (item) {
                        case 'X' : {
                            return 1;
                        }
                        case 'Y' : {
                            return 3 + 2;
                        }
                        case 'Z' : {
                            return 6 + 3;
                        }
                    }
                    break
                }
                case 'C' : {
                    switch (item) {
                        case 'X' : {
                            return 2;
                        }
                        case 'Y' : {
                            return 3 + 3;
                        }
                        case 'Z' : {
                            return 6 + 1;
                        }
                    }
                }
            }
        },0)
    })

console.log(points)