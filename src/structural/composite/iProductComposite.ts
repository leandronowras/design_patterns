import ProductLeaf from "./ProductLeaf"

export default interface ProductComposite {
  add(product: ProductComposite | ProductLeaf): void
  remove(product: ProductComposite | ProductLeaf): void
  getPrice(): number 
}