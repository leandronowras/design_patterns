import AirportCalculator from "../airport/AirportCalculator";
import BeachCalculator from "../beach/BeachCalculator";
import iTicketCalculator from "../iTicketCalculator";
import MallCalculator from "../mall/MallCalculator";

export default class TicketCalculatorFactory {
  static create(location: string): iTicketCalculator {
    switch(location) {
      case 'beach':
        return new BeachCalculator()
      case 'mall':
        return new MallCalculator()
      case 'airport':
        return new AirportCalculator()
    }
    throw new Error('Ticket Calculator not found')
  }
}