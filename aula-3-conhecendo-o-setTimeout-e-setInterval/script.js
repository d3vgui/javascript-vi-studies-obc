// console.log('Iniciando programa...')

// const timeoutId = setTimeout(() =>{
//     console.log('Programa iniciado com sucesso.')
// }, 3000)

// clearTimeout(timeoutId)

// let seconds = 0

// const intervalId = setInterval(() => {
//     seconds += 2
//     console.log(`Se passaram ${seconds} segundos.`)
//     if(seconds > 10) {
//         clearInterval(intervalId)
//         console.log('Tempo esgotado. Encerrando...')
//     }
// }, 3000)

console.log('Iniciando programa...')

let seconds = 0
let user = 'Guilherme'

const intervalId = setInterval(() => {
    seconds += 2
    console.log(`Se passaram ${seconds} segundos. Por favor, aguarde.`)
    if (seconds > 10) {
        clearInterval(intervalId)
        console.log(`Programa iniciado com sucesso. Bem-vindo, ${user}.`)
    }
}, 2000)

