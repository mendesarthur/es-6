// Criação de promessa

const myPromise = new Promise( (resolve, reject) =>{

    const nome = 'arthur'

    if(nome === 'arthur'){
        resolve('Usuario encontrado')
    }
    else{
        reject('Usuario não encontrado')
    }
})  

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise( (resolve, reject) =>{

    const nome = 'arthur'

    if(nome === 'arthur'){
        resolve('Usuario encontrado')
    }
    else{
        reject('Usuario não encontrado')
    }
})  

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModicada) => {
    console.log(stringModicada)
})


// Retorno do catch

const myPromise3 = new Promise( (resolve, reject) =>{

    const nome = 'arthur'

    if(nome === 'arthur'){
        resolve('Usuario encontrado')
    }
    else{
        reject('Usuario não encontrado')
    }
})  

myPromise3.then((data) =>{
    console.log(data)
}).catch((err) =>{
    console.log('Aconteceu um erro ' + err)
})

