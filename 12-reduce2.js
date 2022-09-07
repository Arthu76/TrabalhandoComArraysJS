const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true},
  { nome: 'Pedro', nota: 9.8, bolsista: false},
  { nome: 'Ana', nota: 8.7, bolsista: true}
] 

// Desafio 1: todos os alunos são bolsistas?

const desafio = alunos.map(a => a.bolsista).reduce(function(a, v) {
  return a == true && v == true
})

console.log(desafio)

// Desafio 2: Algum aluno é bolsista?

const desafio2 = alunos.map(a => a.bolsista).reduce(function(a, v) {
  return a == true || v == true

})

console.log(desafio2)

// Resposta do professor-------------------------------

// Desafio 1

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))
