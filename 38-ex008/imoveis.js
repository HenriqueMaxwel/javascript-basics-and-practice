/*const imoveisSalvos = []
let opcao = ""

do {
    opcao = prompt("Imóveis salvos: " + imoveisSalvos.length + "\n1. Salvar Imóvel \n2. Mostrar Imóveis Salvos \n3. Sair.")

    switch (opcao) {
        case "1":
            let novoImovel = prompt("Nome do Proprietário: ") 
            + parseFloat(prompt("Quantidade de quartos: "))
            + parseFloat(prompt("Quantidade de banheiros?"))
            + prompt("Possui banheiro? (sim/não)")
            alert("Imóvel Salvo!")
            imoveisSalvos.push(novoImovel)
            break;
        case "2":
            let imoveis = ""
            for (let i = 0; i < imoveisSalvos.length; i++) {
                imoveis += (i + 1) + " - " + imoveisSalvos[i] + "\n"
            }
            break;
        case "3":
            alert("Saindo...")
            break;
        default:
            alert("Opção Inválida")
            break;
    }

} while (opcao !== "3");*/

//RESOLUÇÃO

const imoveis = []
let opcao = ""

do {
    opcao = prompt("Bem-vindo(a) ao Cadastro de Imóveis!\n" + 
        "Total de imóveis: " + imoveis.length + 
        "\n\nEscolha uma opção: \n1. Novo imóvel \n2.Listar imóveis \n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.propietario = prompt("Informe o nome do propietário:")
            imovel.quartos = parseFloat(prompt("Informe a quantidade de quartos:"))
            imovel.banheiro = parseFloat(prompt("Informe a quantidade de banheiros:"))
            imovel.garagem = prompt("O imóvel possui garagem? (sim/não")

            const confirmacao = confirm("Salvar este Imóvel?" +
            "\nProprietario: " + imovel.propietario +
            "\nQuarto(s): " + imovel.quartos +
            "\nBanheiro(s): " + imovel.banheiro +
            "\nPossui Garagem? " + imovel.garagem)

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imovél salvo!")
            } else {
                alert("Voltando ao menu...")
            }

            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imóvel " + (i + 1) +
                "\nProprietário: " + imoveis[i].propietario +
                "\nQuarto(s): " + imoveis[i].quartos +
                "\nBanheiro(s): " + imoveis[i].banheiro +
                "\nPossui Garagem? " + imoveis[i].garagem)
            }
            break;
        case "3":
            alert("Saindo...")
            break;
        default:
            alert("Opção inválida")
            break;
    }

} while (opcao !== "3");