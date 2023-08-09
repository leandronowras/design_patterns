import CarFactory from "./factories/CarFactory"

test("Should pick up a client and stop", () => {
  const carFactory = new CarFactory()
  const honda = carFactory.getVehicle("Honda")

  // honda.pickUp("Joana")
  // honda.stop()
})