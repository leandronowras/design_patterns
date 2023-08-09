import Item from "./AbstractItem";

export default class Beer extends Item {
  constructor(
    readonly description: string,
    readonly price: number
    ) {
    super("Beer", description, price)
  }

  getTaxRate(): number {
    return 10
  }
}
