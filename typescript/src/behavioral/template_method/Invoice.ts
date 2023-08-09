import Item from "./Items/AbstractItem";

export default class Invoice {
  items: Item[]

  constructor(
  ){
    this.items = []
  }

  addItem(item: Item) {
    this.items.push(item)
  }

  getTaxes() {
    return this.items.reduce((total, item) => {
      total += item.calculateTax();
      return total
    }, 0)
  }
}