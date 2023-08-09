import iTicketCalculator from "../iTicketCalculator";
import Period from "../helper/Period";

export default class MallCalculator implements iTicketCalculator {
  baseRate = 10
  basePeriod = 3
  hourlyRate = 3

  calculate(period: Period): number {
    let price = this.baseRate
    const remainingHours = period.getDiffInHours() - this.basePeriod
    if (remainingHours > 0) price += remainingHours * this.hourlyRate
    return price
  }
}