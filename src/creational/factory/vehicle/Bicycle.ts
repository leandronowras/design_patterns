import Vehicle from "./iVehicle";

export default class Bicycle implements Vehicle {
  constructor(
    readonly name: string
  ){}

  pickUp(customerName: string): void {
    console.log(`${this.name} is searching for ${customerName}`)
  }

  stop(): void {
    console.log(`${this.name} has stopped`)
  }
}