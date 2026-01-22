/*let pilhaCartas = []
let opcao = ""

do {
    let cartas = ""
    for (let index = 0; index < pilhaCartas.length; index++) {
        cartas += (index + 1) + "º - " + pilhaCartas[index] + "\n"
    }

    opcao = prompt("Cartas:\n" + cartas + "\nEscolha uma opção:\n 1. Adicionar Carta\n 2. Puxar uma Carta\n 3. Sair")

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual o nome da carta?")
            //alert(pilhaCartas.push(novaCarta))
            pilhaCartas.push(novaCarta)
            break;
        case "2":
            const cartaTirada = pilhaCartas.shift()
            if (pilhaCartas > 0) {
                alert(cartaTirada + " foi retirada")
            } else {
                alert("Não ha cartas no baralho.")
            }
            break;
        case "3":
            alert("Saindo...")
            break;
        default:
            alert("Opção Invalida")
            break;
    }

} while (opcao !== "3"); */

//RESOLUÇÃO

const baralho = []
let opcao = ""

do {
    opcao = prompt("Cartas no baralho: " + baralho.length + "\n1. Adiconar Carta \n2. Puxar Carta \n3. Sair")

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual a carta a ser adicionada?")
            baralho.push(novaCarta)
            break;
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não ha cartas no baralho")
            } else {
                alert("Voce puxou um(a) " + cartaPuxada)
            }
            break;
        case"3":
            alert("Saindo...")
            break;
        default:
            alert("Opção invalida.")
            break;
    }
} while (opcao !== "3");