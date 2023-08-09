import Period from "./helper/Period";

export default interface iTicketCalculator {
  calculate(period: Period): number
}