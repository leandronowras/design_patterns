import ProductComposed from "./ProductComposed"
import ProductLeaf from "./ProductLeaf"

test("should create a product box and calculate its price", () => {
  const shirt = new ProductLeaf("Calvin Klein", 40)
  const bicycle = new ProductLeaf("Monark", 300)
  const pen = new ProductLeaf("Bic", 1)

  const productBox = new ProductComposed()
  productBox.add(shirt, bicycle, pen)
  expect(productBox.getPrice()).toBe(341)
})