function soma(...numbers){
    return numbers.reduce((acum, num) => acum + num, 0)
}

console.log(soma(1, 2))
console.log(soma(1, 4, 5, 6))
console.log(soma(32, 5 ,7 ,8))