import Period from "./Period";

export default interface iTicketCalculator {
  calculate(period: Period): number
}