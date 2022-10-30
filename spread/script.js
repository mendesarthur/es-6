const towns = ['São paulo', 'Salvador', 'Rio de Janeiro', 'Aracaju', 'Curitiba', 'Campinas', 'Cuiaba', 'Manaus']

console.log(towns)
console.log(...towns[0])


const townsCopy = towns


townsCopy.pop()
towns.pop()
towns.push('Pelotas')

console.log({towns, townsCopy})


const townsClone = [...towns]

townsClone.push('Juazeiro da bahia')

console.log({towns, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}

console.log({townsObj})