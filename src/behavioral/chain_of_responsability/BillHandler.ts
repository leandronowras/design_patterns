import iHandler from "./iHandler";

export default class BillHandler implements iHandler {
  constructor(
    readonly nextHandler: iHandler | null,
    readonly type: number
    ) {}

  handle(bills: any[], amount: number): void {
    const quantity = Math.floor(amount / this.type);
    bills.push({ type: this.type, quantity })
    const remaining = amount % this.type
    if (this.nextHandler) {
      return this.nextHandler.handle(bills, remaining)
    } else {
      if (remaining > 0) throw new Error("No available notes")
    }
  }
}
