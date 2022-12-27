import iProductLeaf from "./iProductLeaf";

export default class ProductLeaf implements iProductLeaf {
  constructor(
    readonly name: string,
    readonly price: number
  ){}

  getPrice(): number {
    return this.price
  }
}