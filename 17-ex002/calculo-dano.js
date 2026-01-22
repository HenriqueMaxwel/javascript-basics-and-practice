/*const attacker = prompt("Inserir nome do primeiro personagem")
const attackPower = parseFloat(prompt("Inserir poder de ataque do primeiro personagem"))

const defenser = prompt("Inserir nome do segundo personagem")
let lifePoints = prompt("Insira os pontos de vida do segundo personagem (ex: 1800)")
const defensePower = parseFloat(prompt("Qual é o seu poder de defesa?"))
const defense = prompt("O segundo personagem possui um escudo? (sim/não)") 

let damage = 0

if (attackPower > defensePower && defense === "não") {
    damage = attackPower  - defensePower
} else if(attackPower > defensePower && defense === "sim") {
    damage = (attackPower - defensePower) / 2
}

lifePoints -= damage

alert(attacker + " causou " + damage + " pontos de dano em " + defenser)
alert(attacker + "\nPoder de ataque: " + "\n\n" + defenser + "\nPontos de vida: " + lifePoints + "\nPoder de defesa: " + defensePower + "\nPossui escudo: " + defense)*/


const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
  } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
  }
  
  pontosDeVida -= danoCausado

  alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)