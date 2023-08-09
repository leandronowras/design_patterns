import TaxVisitor from "../iTaxVisitor";
import Product from "./AbstractProduct";

export default class Food extends Product {
  constructor(protected price: number) {
    super("Food", price)
  }

  getPriceWithTaxes(visitor: TaxVisitor): number {
    return visitor.calculateTaxesForFood(this)
  }
}