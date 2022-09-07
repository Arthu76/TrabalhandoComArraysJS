const carrinho = [
  ' { "nome": "Borracha", "preco": 3.45 }',
  ' { "nome": "Caderno", "preco": 13.45 }',
  ' { "nome": "Kit de Lapis", "preco": 41.22 }',
  ' { "nome": "Caneta", "preco": 7.45 }'
]

// Retornar um array apenas com os preços

const emObj = json => JSON.parse(json)// Transforma em um Obj
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(emObj).map(apenasPreco)

console.log(resultado)
