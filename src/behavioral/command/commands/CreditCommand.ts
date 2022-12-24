import Account from "../Account";
import Command from "./iCommand";

export default class CreditCommand implements Command {
  constructor(
    readonly account: Account,
    readonly amount: number
  ) {

  }

  execute(): void {
    this.account.credit(this.amount)
  }
}