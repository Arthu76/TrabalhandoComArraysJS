let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma não muito recomendada

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']// Forma mais recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Barbara')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort()// Ordena o Array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

//------------------------------------------------------

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

