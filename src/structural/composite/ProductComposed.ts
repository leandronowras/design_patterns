import ProductComposite from "./iProductComposite";
import ProductLeaf from "./ProductLeaf";

export default class ProductComposed implements ProductComposite {
  private children: (ProductLeaf | ProductComposite)[] = []

  constructor(){}

  add(...products: (ProductComposite | ProductLeaf)[]): void {
    products.forEach((product) => this.children.push(product))
  }

  remove(product: ProductComposite | ProductLeaf): void {
    const productIndex = this.children.indexOf(product)
    if(productIndex !== -1) this.children.splice(productIndex, 1)
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
  }
}