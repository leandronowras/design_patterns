import iTicketCalculator from "../iTicketCalculator";
import Period from "../helper/Period";

export default class AirportCalculator implements iTicketCalculator {
  dailyRate = 50

  calculate(period: Period): number {
    const price = this.dailyRate + (50 * period.getDiffInDays())

    return price
  }
}