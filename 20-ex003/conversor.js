const medida = prompt("Escreva o valor em Metros(M):")

const converter = prompt("Escolha a unidade de medida para qual você quer converter: \n\n(mm) \n(cm) \n(dm) \n(dam) \n(hm) \n(km)")

const medidaNumerica = parseFloat(medida)

switch (converter) {
    case "mm":
        alert("O resultado é " + medidaNumerica * 1000 + "mm")        
        break;
    case "cm":
        alert("O resultado é " + medidaNumerica * 100 + "cm")
        break;
    case "dm":
        alert("O resultado é " + medidaNumerica * 10 + "dm")
        break;
    case "dam":
        alert("O resultado é " + medidaNumerica / 10 + "dam")
        break;
    case "hm":
        alert("O resultado é " + medidaNumerica / 100 + "hm")
        break;
    case "km":
        alert("O resultado é " + medidaNumerica / 1000 + "km")
        break;
    default:
        alert("Opção inválida")
}