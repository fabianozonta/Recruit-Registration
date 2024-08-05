const nome = window.prompt('Insira seu nome: ')
const sobrenome = window.prompt('Insira seu sobrenome: ')
const campo = window.prompt('Digite seu campo de estudo: ')
const nascimento = window.prompt('Digite o seu ano de nascimento')

const hoje = new Date();
ano = hoje.getFullYear();
idade = ano - nascimento

alert(
    "Recruta cadastrado com sucesso!\n" + 
    '\nNome completo: ' + nome + " " + sobrenome + 
    '\nCampo de estudo: ' + campo +
    '\nIdade: ' + idade
    
)