export default interface iTicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number
}