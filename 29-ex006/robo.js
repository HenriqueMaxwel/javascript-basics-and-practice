const numero = parseFloat(prompt("digite um número para saber sua tabuada do 0 ao  20"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"        
}

alert("Resultado da tabuada do " + numero + ": " + resultado)

//RESOLUÇÃO

/*const numero = prompt("Ola!, eu sou o robô da tabuada\n" +
    "Informe o número que voce deseja calcular a tabuada"
)
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += "->" + numero + " * " + fator " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)*/