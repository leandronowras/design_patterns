export default abstract class Item {
  constructor(
    readonly category: string,
    readonly description: string,
    readonly price: number
  ) { }

  // template
  calculateTax() {
    return (this.price * this.getTaxRate()) / 100
  }

  abstract getTaxRate(): number
}