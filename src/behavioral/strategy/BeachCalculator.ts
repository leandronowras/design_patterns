import iTicketCalculator from "./iTicketCalculator";

export default class BeachCalculator implements iTicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
      const diffInHours = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60)
      const price = 5 * diffInHours
      return price
  }
}