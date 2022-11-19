let komodoShip = {
    name: 'Komodo',
    velocity: 80,
    acceleration: 10
}

const velocityAfter2Second = (velocity, acceleration) =>{
    new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(acceleration > 0){
                velocity += acceleration * 2
                console.log(`Nova velocidade: ${velocity}`)
                resolve(velocity)
            }
            else{
                console.log('Aceleracão inválida')
                reject('Não possui aceleração')
            }
        },1000)
    })
}

velocityAfter2Second(komodoShip.velocity, komodoShip.acceleration)

console.log('Execução de promises')