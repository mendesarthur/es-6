class Spaceship {
  constructor(name, maxCapacity, currentCharge) {
    this.name = name
    this.maxCapacity = maxCapacity
    this.currentChage = currentCharge
  }
  currentPercentCharge() {
    return this.currentChage * 100 / this.maxCapacity
  }
}
export default Spaceship
