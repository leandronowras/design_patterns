import TaxVisitor from "../iTaxVisitor";
import Product from "./AbstractProduct";

export default class AcoholicDrink extends Product {
  constructor(protected price: number) {
    super("AcoholicDrink", price)
  }

  getPriceWithTaxes(visitor: TaxVisitor): number {
    return visitor.calculateTaxesForAlcoholicDrink(this)
  }
}