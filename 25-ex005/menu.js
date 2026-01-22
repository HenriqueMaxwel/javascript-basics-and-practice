/*let opcao = ""

do {
    prompt("1 - Opção 1\n" +
        "2 - Opção 2\n" +
        "3 - Opção 3\n" +
        "4 - Opção 4\n" +
        "5 - Encerrar"
    )


    switch (opcao) {
        case "1":
            alert("A opção escolhido foi: Opção 1")
            break
        case "2":
            alert("A opção escolhido foi: Opção 2")
            break
        case "3":
            alert("A opção escolhido foi: Opção 3")
            break
        case "4":
            alert("A opção escolhido foi: Opção 4")
            break
        case "5":
            alert("Encerrando sistema...")
            break
        default:
            alert("Opção não válida")
    }
} while (opcao !== "5");*/
 
//RESOLUÇÃO ABAIXO

let opcao = ""

do {
    opcao = prompt("Seja bem-vindo(a)\n" + 
    "\nEscolha uma das opções abaixo:" +
    "\n1. Opção Um" +
    "\n2. Opção Dois" +
    "\n3. Opção Tres" +
    "\n4. Opção Quatro" +
    "\n5. Encerrar" 
    )
    
    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break;
        case "2":
            alert("Você escolheu a opção 2")
            break;
        case "3":
            alert("Você escolheu a opção 3")
            break;
        case "4":
            alert("Você escolheu a opção 4")
            break;
        case "5":
            alert("Finalizando sistema...")
            break;
        default:
            alert("Opção inválida")
            break;
    }

} while (opcao !== "5");