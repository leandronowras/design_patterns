import iHandler from "./iHandler"

export default class AtmMachine {
  constructor(
    readonly handler: iHandler
  ) {

  }

  withdraw(amount: number) {
    const bills: any = []
    this.handler.handle(bills, amount)
    return bills
  }
}