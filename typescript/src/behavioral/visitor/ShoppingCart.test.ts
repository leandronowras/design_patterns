import Brazil from "./countries/Brazil"
import AcoholicDrink from "./products/AlcoholicDrink"
import Cigarette from "./products/Cigarette"
import Food from "./products/Food"

test("Should create a shopping cart", () => {
  const food = new Food(10)
  const vodka = new AcoholicDrink(90)
  const cigarette = new Cigarette(20)

  const brazilTaxVisitor = new Brazil()

  const cart = [food, vodka, cigarette]
  const total = cart.reduce((sum, item) => item.getPrice() + sum, 0)
  const totalWithBrazilTaxes = cart.reduce(
    (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0
  )

  expect(total).toBe(120)
  expect(totalWithBrazilTaxes).toBe(196)
})