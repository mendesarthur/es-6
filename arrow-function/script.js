function calcular(a, b, op){
    let operacao = op(a, b)
    return operacao
}

function normalSum(a, b){
    return a + b
}

const normalSub = function(x, y){
    return x - y
}

console.log((`Soma normal: ${calcular(2, 5, normalSum)}`))

// arrow function

const soma = (a, b) => a + b

const sub = (x, y) => x - y

const calc = (a, b, op) =>{
    let operacao = op(a, b)
    return operacao
}

console.log(`${calc(3, 6, (y, z) => y * z)} `)