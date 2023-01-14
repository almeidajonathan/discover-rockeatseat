//Retorna um valor

    
const arr = [10,20,30,40]

const soma = arr.reduce((acc, item) => {
    console.log(`acc: ${acc} - index: ${item}\n`)
    return acc + item
}, 0)

// console.log(soma)
