const car1 = prompt("Nome do primeiro carro:")
const speed1 = parseFloat(prompt("Velocidade do primeiro carro:"))

const car2 = prompt("Nome do segundo carro:")
const speed2 = parseFloat(prompt("Velocidade do segundo carro:"))

if (speed1 > speed2) {
    alert(car1 + " é mais rapido que " + car2)
} else if (speed1 === speed2) {
    alert(car1 + " e " + car2 + " possuem velocidades iguais")
} else {
    alert(car1 + " é mais rapido que " + car1)
}