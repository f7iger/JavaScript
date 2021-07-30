// Quem nunca fez isso?
const math = (operador, valor1 = 1, valor2 = 1) => {
    const operacoes = {
        soma: valor1 + valor2,
        subt: valor1 - valor2,
        mult: valor1 * valor2,
        divs: valor1 / valor2
    }
    
    switch ( operador ){
        case "a":
            return operacoes.soma
            break
        case "s":
            return operacoes.subt
            break
        case "m":
            return operacoes.mult
            break
        case "d":
            return operacoes.divs
            
    }
}
console.log(math('s', 1, 2))
console.log(math("a", 2, 2))
console.log(math("m", 2, 4))
console.log(math('d', 987 , 9).toFixed(2))