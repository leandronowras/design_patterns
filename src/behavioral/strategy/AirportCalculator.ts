import iTicketCalculator from "./iTicketCalculator";

export default class AirportCalculator implements iTicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const diffInHours = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24)
    const price = 50 + (50 * diffInHours)

    return price
  }
}