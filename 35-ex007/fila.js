/*let filaPacientes = []
let opcao = ""

do {
    let pacientes = ""
    for(let i = 0; i < filaPacientes.length; i++) {
        pacientes += (i + 1) + "º - " + filaPacientes[i] + "\n"
    }

    opcao = prompt("Escolha entre as opções abaixo: \n" + "1. Novo Paciente\n" + "2. Consultar Paciente\n" + "3. Sair")

    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Nome do Paciente: ")
            filaPacientes.push(novoPaciente)
            break;
        case "2":
            const consultarPaciente = filaPacientes.shift()
            if (!consultarPaciente) {
                alert("Não ha pacientes na fila")
            } else {
                alert(consultarPaciente + " foi removido da fila.")
            }
            break
        case "3":
            alert("Saindo...")
        default:
            alert("opção invalida")
            break;
    }
} while (opcao !== "3");*/

//RESOLUÇÃO

let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt("Pacientes:\n" + pacientes + "\nEscolha uma ação: \n1. Novo Paciente \n2. Consultar paciente \n3. Sair")

    switch(opcao){
        case "1":
            const novoPaciente = prompt("Nome do paciente:" )
            fila.push(novoPaciente)
            break;
        case "2":
            const pacienteConsultado = fila.shift()
            if (fila.length > 0) {
                alert(pacienteConsultado + " foi removido da fila.")
            } else {
                alert("Não ha pacientes na fila.")
            }
            break;
        case "3":
            alert("Encerrando...")
            break;
        default:
            alert("Opção Invalida")
            break;
    }


} while ( opcao!== "3");