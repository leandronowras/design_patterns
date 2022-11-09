import iTicketCalculator from "./iTicketCalculator"
import Period from "./Period"

export default class ParkingLot {
  tickets: { plate: string, checkinDate: Date }[]

  constructor(
    readonly location: string,
    readonly totalSlots: number,
    readonly ticketCalculator: iTicketCalculator
  ) {
    this.tickets = []
  }

  getSlots() {
    return this.totalSlots - this.tickets.length
  }

  checkin(plate: string, checkinDate: Date) {
    this.tickets.push({ plate, checkinDate })
  }

  checkout(plate: string, checkoutDate: Date) {
    const ticket = this.tickets.find(ticket => ticket.plate === plate)
    if (!ticket) throw new Error("ticket not found")
    const period = new Period(ticket.checkinDate, checkoutDate)
    const price = this.ticketCalculator.calculate(period)

    return {
      price
    }
  }
}

