import LoggerUseCaseDecorator from "./decorators/LoggerUseCaseDecorator"
import PerformanceUseCaseDecorator from "./decorators/PerformanceUseCaseDecorator"
import PlaceOrder from "./use_cases/PlaceOrder"
import SimulateFreight from "./use_cases/SimulateFreight"

test("Should log the operations inside an use case",() => {
  const input = {
    cpf: '123.456.789-10',
    items: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ]
  }
  // const placeOrder = new LoggerUseCaseDecorator(new PerformanceUseCaseDecorator(new PlaceOrder()));
	// placeOrder.execute(input);
  // const simulateFreight = new LoggerUseCaseDecorator(new PerformanceUseCaseDecorator(new SimulateFreight()));
	// simulateFreight.execute(input);
})
