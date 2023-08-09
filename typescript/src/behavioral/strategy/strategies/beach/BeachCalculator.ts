import iTicketCalculator from "../iTicketCalculator";
import Period from "../helper/Period";

export default class BeachCalculator implements iTicketCalculator {
  hourlyRate = 5

  calculate(period: Period): number {
      const price = this.hourlyRate * period.getDiffInHours()
      return price
  }
}