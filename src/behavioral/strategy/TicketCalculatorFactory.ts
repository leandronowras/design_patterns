import AirportCalculator from "./AirportCalculator";
import BeachCalculator from "./BeachCalculator";
import iTicketCalculator from "./iTicketCalculator";
import MallCalculator from "./MallCalculator";

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