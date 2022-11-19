import Spaceship from './Spaceship'
import Engine from "./Engine"

const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4)
const sophiaEngine = new Engine(sophia)
const amsterdaEngine = new Engine(amsterda)
const dwarfStartEngine = new Engine(dwarfStart)
sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()
console.log("Promises") 
