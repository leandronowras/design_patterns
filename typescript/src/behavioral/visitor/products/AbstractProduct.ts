import TaxVisitor from "../iTaxVisitor"

export default abstract class Product {
  constructor(
    protected name: string,
    protected price: number
  ){}

  getName(): string {
    return this.name
  }

  getPrice(): number {
    return this.price
  }

  abstract getPriceWithTaxes(visitor: TaxVisitor): number
}