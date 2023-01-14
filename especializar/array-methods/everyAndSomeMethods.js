//Every: retorna um valor booleano caso TODOS os itens satisfaçam a condição
const typeOne = [1,2,3,4,5]
const typeTwo = ['1','2','3','4','5']
const typeThree = [1,'A','B',2]

const typeOneReturn = typeOne.every(elem => typeof elem === 'number')
console.log(`TypeOne return is: ${typeOneReturn}`);

//Neste exemplo ele faz um coersão de tipo
const typeTwoReturn = typeTwo.every(elem => typeof elem === 'number')
console.log(`TypeTwo return is: ${typeOneReturn}`);

const typeThreeReturn = typeThree.every(elem => typeof elem === 'number') 
console.log(`TypeThree return is: ${typeThreeReturn}`)

//Some: returna um valor booleano caso ALGUM item satisfaça a condição
const some = typeThree.some(elem => typeof elem === 'string')
console.log(`Some number in typeThree? ${some}`)
// console.log(typeof typeThree[1])