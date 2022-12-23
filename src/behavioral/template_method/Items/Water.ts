import Item from "./AbstractItem";

export default class Water extends Item {
  constructor(
    readonly description: string,
    readonly price: number
    ) {
    super("Water", description, price)
  }

  getTaxRate(): number {
    return 0
  }
}
