/*function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(4, 5))

operacao = function (a, b) {
    return a - b
}

console.log(operacao(4, 5))*/

olaMundo()
//oiMundo() função chamada antes de uma *função anonima* ser criada da erro


function olaMundo() {
    console.log("Ola, mundo!")
}

const oiMundo = function() {
    console.log("Oi, mundo!")
}


oiMundo()