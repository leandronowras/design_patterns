import TaxVisitor from "../iTaxVisitor";
import Product from "./AbstractProduct";

export default class Cigarette extends Product {
  constructor(protected price: number) {
    super("Cigarette", price)
  }
  
  getPriceWithTaxes(visitor: TaxVisitor): number {
    return visitor.calculateTaxesForCigarette(this)
  }
}