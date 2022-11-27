// // Criação de Promessa

const myPromise1 = new Promise((resolve, reject) =>{
    const nome = 'José'

    if(nome === 'Arthur'){
        resolve('Usuário encontrado com sucesso!')
    }else{
        reject('O usuário Arthur não encontrado!')
    }
})

myPromise1.then((data) =>{
    console.log(data)
})


// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) =>{
    const nome = 'Arthur'

    if(nome === 'Arthur'){
        resolve('Usuário encontrado com sucesso!')

    }else{
        reject('Usuario não encontrado!')
    }
})
myPromise2.then((data) =>{
    return  data.toUpperCase()
}).then((data) =>{
    console.log(data)
})


// // then e catch

const myPromise3 = new Promise((resolve, reject) =>{ 
    const idade = 19

    if(idade >= 18){
        resolve('Idade permitida!')
    }else{
        reject('Idade não permitida!')
    }
})
myPromise3.then((data) =>{
    console.log(data)
})
.catch((err) =>{
    console.log('Erro de idade: ' + err)
})


// Resolver várias promessas Usando all

// Metodo all retorna quando todas as promessas forem resolvidas
const p1 = new Promise(( resolve, reject) =>{
   setTimeout(() =>{
    resolve('p1 ok! timeout')
   }, 2000)
})


const p2 = new Promise(( resolve, reject) =>{
   resolve("P2 ok!")
})



const p3 = new Promise(( resolve, reject) =>{
   resolve("P3 ok!")
})


const p4 = new Promise(( resolve, reject) =>{
   resolve("P4 ok!")
})

const resolveAll = Promise.all([p1, p2, p3, p4]).then( (data) =>{
    console.log(data)
})


// Resolvendo várias promessas com race

// Metodo race retorna a primeira promessa a ser resolvida
const p5 = new Promise(( resolve, reject) =>{
   setTimeout(() =>{
    resolve('p5 ok! timeout')
   }, 2000)
})


const p6 = new Promise(( resolve, reject) =>{
   resolve("P6 ok!")
})



const p7 = new Promise(( resolve, reject) =>{
   resolve("P7 ok!")
})


const p8 = new Promise(( resolve, reject) =>{
   resolve("P8 ok!")
})

const resolveAllRace = Promise.race([p5, p6, p7, p8]).then( (data) =>{
    console.log(data)
})