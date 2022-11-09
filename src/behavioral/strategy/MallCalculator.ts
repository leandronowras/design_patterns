import iTicketCalculator from "./iTicketCalculator";

export default class MallCalculator implements iTicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const diffInHours = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60)
    let price = 10
    const remainingHours = diffInHours - 3
    if (remainingHours > 0) price += remainingHours * 3
    return price
  }
}