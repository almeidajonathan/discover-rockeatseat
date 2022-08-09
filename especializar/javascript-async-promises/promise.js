console.log('Pedir uber')
let acepted = true
const promise = new Promise((resolve, reject) => {
    if (acepted) {
        return resolve('Carro está a caminho.')
    } else {
        return reject('Corrida cancelada.')
    }
})

console.log('Aguardando...')

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizada')) 