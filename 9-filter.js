const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'iPad', preco: 4199, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// O filter ele é outra função 'Callback' filtra o array para ter um sub array, com a quantidade de elementos iguais ou menores baseado no critério do filtro

const caro = produto => produto.preco >= 500
const fragilidade = produto => produto.fragil

const caroEFragil = produtos.filter(caro).filter(fragilidade)

console.log(caroEFragil)