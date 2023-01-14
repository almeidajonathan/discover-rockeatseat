//Filter: retorna elementos do array, desde que esses satisfaçam alguma condição
const numbers = [1,2,3,4,5,6,7,8,9,10]

//Neste exemplo o retorno são os números pares
const evenNumbers = numbers.filter(item => item % 2 === 0)

console.log(evenNumbers)