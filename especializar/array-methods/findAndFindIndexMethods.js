//Find retorna PRIMEIRO item que fatisfaça a condição

const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNumber = numbers.find(item => item % 2 === 0) 
console.log(evenNumber)

//FindIndex retorna o índice do PRIMEIRO item que satisfaça a condição