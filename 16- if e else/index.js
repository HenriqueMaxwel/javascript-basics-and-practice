const idade = prompt("Defina a sua idade:")

const resultado = (6 == 6) ? "Verdadeiro" : "Falso"
console.log(resultado)

if (idade >= 18) {
    alert("Você é maior de idade!")
} else if(idade > 12){
    alert("Você é menor de idade!")
} else if (idade > 4) {
    alert("Você é criança")
} else {
    alert("...")
}

/*if (idade >= 18) {
    alert("Você é maior de idade!")
} else {22
    alert("Você é menor de idade!")

    if(idade <= 12) {
        alert("Você é criança!")
    }
}*/

if(6==6) {
    console.log("verdadeiro")
}

if (6!==6) {
    console.log("verdadeiro")
} else {
    console.log("falso")
}