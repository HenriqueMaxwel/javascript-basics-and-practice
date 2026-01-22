/*const dineiroInicial = parseFloat(prompt("Qual é a quantidade inicial de dinheiro disponível?"))
let addRem = prompt("Seu saldo é de: " + dinheiroInicial + "\nAdicionar dinheiro" + " Remover dinheiro")

let add = parseFloat("")
const addf = dineiroInicial + add

while (addRem === "Adicionar dinheiro") {
    add = prompt("Qual a quantia a ser adicionada?")
    prompt("Quantia atual: " + (dinheiroInicial + add) + "\nAdicionar dinheiro" + " Remover dinheiro")
}*/

//RESOLUÇÃO ABAIXO (não consegui fazer esta atvd)

let saldo = prompt("Informe a quantidade de dinehiro inicial:")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: R$" + saldo +
        "\n1. Adcionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Encerrar"
    )

    switch (opcao) {
        case "1":
            saldo += prompt("Informe o valor que quer adicionar:")
            break;
        case "2":
            saldo -= prompt("Informe o valor que quer subtrair")
            break;
        case "3":
            alert("Encerrando programa...")
    
        default:
            alert("Opção inválida")
            break;
    }
} while (opcao !== "3");