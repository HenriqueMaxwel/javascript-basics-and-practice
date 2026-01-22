/*let opcao = ""
function calcular(b, a) {
    alert("A área da forma geométrica é: " + (b * a))
}

do {
    opcao = prompt("Qual área voce deseja calcular?\n\n 1. Triângulo\n 2. Retângulo\n 3. Quadrado\n 4. Trapézio\n 5. Círculo\n 6. Sair")

    switch (opcao) {
        case "1":
            let baseTriangulo = parseFloat(prompt("Qual a base do Triângulo?"))
            let alturaTriangulo = parseFloat(prompt("Qual a altura do Triângulo?"))

            calcular(baseTriangulo, alturaTriangulo/2)
            break;
        case "2":
            let baseRetangulo = parseFloat(prompt("Qual a base do Retângulo?"))
            let alturaRetangulo = parseFloat(prompt("Qual a altura do Retângulo?"))

            calcular(baseRetangulo, alturaRetangulo)
            break;
        case "3":
            let ladoQuadrado = parseFloat(prompt("Qual é o lado do quadrado?"))

            calcular(ladoQuadrado, ladoQuadrado)
            break;
        case "4":
            let baseMaior = parseFloat(prompt("Qual a base maior do Trapézio?"))
            let baseMenor = parseFloat(prompt("Qual é a abse menor do Trapézio?"))
            let alturaTrapezio = parseFloat(prompt("Qual a altura do Trapézio?"))
            
            let baseTrapezio = (baseMaior + baseMenor)
            calcular(baseTrapezio, alturaTrapezio/2)
            break;
        case "5":
            let pi = parseFloat(3,14)
            let raioCirculo = parseFloat(prompt("Qual é o raio do Círculo?"))

            let raio = calcular(raioCirculo, raioCirculo)
            calcular(pi,raio) 
            break;
        case "6":
            alert("Encerrando calculadora...")
            break;
        default:
            alert("Opção inválida")
            break;
    }

} while (opcao !== "6");*/

//RESOLUÇÃO

function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo: ")
    const altura = prompt("Informe a altura do triângulo: ")
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo: ")
    const altura = prompt("Informe a altura do retângulo: ")
    return base * altura 
}

function calcularAreaQuadrado() {
    const lado = prompt("Informe o lado do quadrado: ")
    return lado ** 2
}

function calcularAreaTrapezio () {
    const baseMaior = parseFloat(prompt("Informe a base maior trapézio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = prompt("Informe a altura do trapézio: ")
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo () {
    const raio = prompt("Informe o raio do círculo: ")
    return 3,14 * raio ** 2
}

function exibirMenu () {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado = ""

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Encerrando calculadora...")
            default:
                alert("Opção Inválida.")
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
    } while (opcao !== "6");
}

executar()