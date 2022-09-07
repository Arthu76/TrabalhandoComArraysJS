// map cria outro array a partir de um array ja existente com o mesmo tamanho mas com dados transformados

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
  return e * 2
})

console.log(nums, resultado)

//------------------------------------------------------

const soma10 = e => e + 10
const triplo = e => e * 3
// A função parseFloat analisa um argumento string e retorna um número de ponto flutuante
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)