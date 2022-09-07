const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Susie',
    nota: 9.3
  }]
  }, {
    nome: 'Turma M2',
    alunos: [{
      nome: 'Rebeca',
      nota: 8.9
    }, {
      nome: 'Maria',
      nota: 7.3
    }]
  }]

  const getNotaDoAluno = aluno => aluno.nota
  const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

  const notas1 = escola.map(getNotasDaTurma)
  console.log(notas1)

  // Criando a função flatMap

  Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
  }

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
