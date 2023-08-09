import { deliveryContext } from './delivery/DeliveryContext';
import DeliveryFactory from "./delivery/DeliveryFactory"

test("Should make a delivery", () => {
  const factory = new DeliveryFactory()
  deliveryContext(factory, "Leandro", "20A", "Aguas Claras", "BSB")
  deliveryContext(factory, "Joana", "20A", "Aguas Claras", "BSB")
  deliveryContext(factory, "Joao", "301", "Aguas Claras", "BSB")
  deliveryContext(factory, "Jonathas", "243", "Bangu", "RJ")
  deliveryContext(factory, "Felipe", "101", "Av Brasil", "SP")
  deliveryContext(factory, "Nowras", "2", "Guara", "BSB")

  expect(factory.getLocations()).toEqual({"aguasclaras_bsb": {"sharedState": {"city": "BSB", "street": "Aguas Claras"}}, "avbrasil_sp": {"sharedState": {"city": "SP", "street": "Av Brasil"}}, "bangu_rj": {"sharedState": {"city": "RJ", "street": "Bangu"}}, "guara_bsb": {"sharedState": {"city": "BSB", "street": "Guara"}}})
})