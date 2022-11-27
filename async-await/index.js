// Sintaxe 

// function primeiraFuncao() {

//     return new Promise((resolve) =>{

//         setTimeout(() =>{
//             console.log("Esperou por isso aqui")
//             resolve()
//         }, 1000)
//     })
// }


//  async function segundaFuncao(){

//     console.log("Iníciou")

//      await primeiraFuncao()

//     console.log("Terminou")

// }

// segundaFuncao()


// Prático

function getUser(id){

    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function showUserName(id){
    try {
        const user = await getUser(id)
    
        console.log(`O nome do usuário é ${user.data.first_name}`)
    } catch (err) {
        
        console.log(`Erro: ${err}`)
    }
}

showUserName(5)

