/*
    1 + 1 = 2, 2 + 1 = 3, 3 + 2 = 5 ...
*/



function cont(máx = 255){
    let [x, y, z] = [0, 1, Number]
    do {
        //return x
        console.log(x)
        z = x + y
        x = y
        y = z
    } while ( x < máx )
}

cont()