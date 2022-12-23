import Invoice from "./Invoice"
import Beer from "./Items/Beer"
import Water from "./Items/Water"
import Whisky from "./Items/Whisky"

test('Should calculate taxes from a recipe', () => {
  const invoice = new Invoice()
  invoice.addItem(new Beer("Heineken", 20))
  invoice.addItem(new Whisky("Jack Daniels", 100))
  invoice.addItem(new Water("Crystal", 5))

  const taxes = invoice.getTaxes()
  expect(taxes).toBe(22)
})