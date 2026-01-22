const primeiroNome = prompt('Informe o primeiro nome do recruta:')
const segundoNome = prompt('Informe o segundo nome do recruta:')
const campoDeEstudo = prompt('Qual o campo de estudo do recruta?')
const anoDeNascimento = prompt('Ano de nascimento do recruta:')

alert(
    "Recruta cadastrado com sucesso! \n"+ 
    "\nNome completo: " + primeiroNome + " " + segundoNome +  
    "\nCampo de estudo: " + campoDeEstudo + 
    "\nIdade: " + (2024 - anoDeNascimento)
)