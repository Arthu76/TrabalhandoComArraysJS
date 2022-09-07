// calculando a média dos alunos
const alunos = [
  {nome: 'João', nota: 7.9},
  {nome: 'Maria', nota: 9.2}
]

// abordagem imperativa--------------------------------
// aqui ja esta fazendo o código tudo de uma vez( de uma forma detalhada ), sem poder reusar depois
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// abordagem declarativa------------------------------
// aqui, depois que criada você podera usar de novo de um jeito mais facil. E você não precisa ser muito expecífico 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
