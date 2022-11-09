import iTransaction from "../../iTransaction";
import PaypalTransaction from "./PaypalTransaction";

export default class PaypalTransactionAdapter implements iTransaction {
  trackNumber: string;
  amount: number;
  status: string;

  constructor(paypalTransaction: PaypalTransaction){
    this.trackNumber = paypalTransaction.id.toString(),
    this.amount = paypalTransaction.amount,
    this.status = paypalTransaction.status
  }
}