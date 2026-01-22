/*vagas = []
let opcao = ""
numCandidatos = 0

do {
    opcao = prompt("Bem Vindo(a) ao nosso site de vagas de emprego. escolha um opção para continuar:\n 1-Listar vagas disponíveis\n 2-Criar um nova vaga\n 3-Visualizar 4-uma vaga\n 5-Inscrever um candidato em uma vaga\n 6-Excluir uma vaga\n 7-Sair")

    switch (opcao) {
        case "1":
        let candidatos = {}
        
        alert(
            "Número de candidatos inscritos: " + numCandidatos.length +
            "\nNome dos Candidatos: " + candidatos
        )
            break;
        
        case"2":
        const vaga = {}

        vaga.nome = prompt("Informe o nome da vaga")
        vaga.descricao = prompt("Descreva a vaga")
        vaga.data = prompt("Qual a data limite para se inscrever para esta vaga?")

        const confirmacao = confirm("Deseja salvar esta vaga?" + 
        "\nNome da Vaga: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.data)

        if (confirmacao === true) {
            vagas.push(vaga)
            alert("Vaga salva!")
        } else {
            alert("Voltando ao Menu")
        }
            break;
        

        case"3":

            break;
        default:
            alert("Opção Inválida")
            break;
    }

} while (opcao !== "7");*/
// Não consegui fazer

//Resolução

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidato(s))\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Descreva a vaga:")
    const dataLimite = prompt("Informe uma data limite para inscrição (dd/mm/aa):")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?:\n" + "Nome da vaga: " + nome + "\nDescrição: " + descricao + "\nData imite para inscrição: " + dataLimite
    )

    if(confirmacao === true) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    if(indice >= vagas.length && indice < 0) {
        alert("Indice inválido")
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga " + indice +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData limite para inscrição: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscrevrCandidato() {
    const candidato = prompt("Informe nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato deseja se inscrever")
    const vaga = vagas[indice]

    const confirmação = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\n" + "Descrição: " + vaga.descricao + "\n" + "Data Limite para inscrição: " + vaga.dataLimite
    )

    if(confirmação) {
        vaga.candidatos.push(candidato)
        alert("Inscrição feita com sucesso!")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "/\n" + "Nome: " + vaga.nome + "\n" + "Descrição: " + vaga.descricao + "\n" + "Data Limite para inscrição: " + vaga.dataLimite
    )

    if(confirmacao === true) {
        vaga.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções: \n1-Listar vagas disponíveis \n2-Criar um nova vaga \n3-Visualizar uma vaga \n4-Inscrever um candidato em uma vaga \n5-Excluir uma vaga \n6-Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch(opcao){
            case"1":
                listarVagas()
                break;
            case"2":
                novaVaga()
                break;
            case"3":
                exibirVaga()
                break;
            case"4":
                inscrevrCandidato()
            break;
            case"5":
                excluirVaga()
                break;
            case"6":
                alert("Saindo...")
                break;
            default:
                alert("opção inválida")
                break;
        }
    } while (opcao !== "6");
}

executar()