//(Inicialização; condição; finalização)
/*for (let indice = 0; indice <= 10; indice++) {
    alert("Indice = " + indice)
}*/

//ou

/*let indice = 0

for (alert("Inicializando o for"); indice <= 10; indice++) {
    alert("Indice = " + indice)
}*/

//ou

/*let indice = 0

for (alert("Inicializando o for"); indice <= 10; alert("Finalizando um bloco de repetição")) {
    alert("Indice = " + indice)
    indice++
}*/

//ou

/*for (; indice <= 10; ) {
    alert("Indice = " + indice)
    indice++
}*/

//Outro exemplo

let nome = "Henrique Maxwel"

for (let i = 0; i < +nome.length; i++) {
    console.log(nome[i])
}
