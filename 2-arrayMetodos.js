const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()// remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')// adiciona um elemento a um array
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona um elemento na primeira posição
console.log(pilotos)

//---splice pode remover e/ou adicionar elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//---slice cria um novo array a partir das indices de outro array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0, 2)
console.log(algunsPilotos2)

