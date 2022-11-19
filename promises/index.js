// function sumNumbers(){
//     let result = 1 + 1

//     if(result == 2){
//         sucessCallback()
//     }
//     else{
//         errorCallback()
//     }
// }


// function sucessCallback(){
//     console.log('Sim! Número 2')
// }

// function errorCallback(){
//     console.log('Erro, número diferente de 2')
// }


// sumNumbers(2)


// Usando Promises 


let p = new Promise((resolve, reject) =>{
    let a = 2 + 1
    if( a == 2){
        resolve('Sucess')
    }
    else{
        reject(`A soma dos números deu: ${a}`)
    }
})

p.then((message) =>{
    console.log('Ok, its Rigth' + message)
}).catch((err) =>{
    console.log('Error, ' + err)
})

// Ou seja then para o resolve e catch para o reject