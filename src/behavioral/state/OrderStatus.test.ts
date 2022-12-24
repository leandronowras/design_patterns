import Order from "./Order"

test("Should create an order with pending status", () => {
  const order = new Order()

  expect(order.status.value).toBe("pending")
})

test("Should change status to confirmed", () => {
  const order = new Order()
  order.confirm()

  expect(order.status.value).toBe("confirmed")
})

test("Should change status to cancelled", () => {
  const order = new Order()
  order.cancel()

  expect(order.status.value).toBe("cancelled")
})

test("If the order is cancelled, it should not change the status of it", () => {
  const order = new Order()
  order.cancel()

  expect(() => order.confirm()).toThrow(new Error("The order was already cancelled")) 
})