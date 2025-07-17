// const p = new Promise((resolve, reject) => {
//     console.log('A promise está sendo executada.')
//     setTimeout(() => {
//         if (1 + 1 === 2) {
//             reject("Algo deu errado!")
//         }
//         console.log('Resolvendo a promise...')
//         resolve('Resultado')
//     }, 3 * 1000)
// })

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// }, 5 * 1000)


function execute(){
    return new Promise((resolve, reject) =>{
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve(42)
        }, 1000 * 3)
    })
}

const j = execute()

console.log(j)

setTimeout(() => {
    console.log(j)
}, 5 * 1000)

