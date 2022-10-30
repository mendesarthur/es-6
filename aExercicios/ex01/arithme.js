// Média simples
const media = (...numbers) =>{
    return numbers.reduce((acum, num) => {
        return (acum + num) / numbers.length
    })
    
}

console.log(`A média foi de :${media(3, 5, 6, 7)}`)


// Média ponderada
const mediaPonderada = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
  }
  
  console.log(`A Média Ponderada foi de: ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 },
  )}`)

// Mediana

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

// console.log(`A Mediana foi de: ${median(2, 5, 99, 4, 42, 7)}`)
// console.log(`A Mediana foi de: ${median(15, 14, 8, 7, 3)}`)


// Moda

const moda = (...numbers) =>{
  // [[N, qtd], [N, qtd], [N, qtd]]
  const quantities = numbers.map(num =>[
    num, 
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`A Moda foi de: ${moda( 5, 34, 31, 71, 71, 71, 71, 8, 2, 71)}`)