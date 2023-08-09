import CancelledStatus from "./CancelledStatus";
import Order from "../Order";
import OrderStatus from "./AbstractOrderStatus";

export default class ConfirmedStatus extends OrderStatus {
  value: string;

  constructor(order: Order) {
    super(order)
    this.value = "confirmed"
  }

  confirm(): void {
    throw new Error("Order already confirmed")
  }

  cancel(): void {
    this.order.status = new CancelledStatus(this.order)
  }
}