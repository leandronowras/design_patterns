import Order from "../Order";
import OrderStatus from "./AbstractOrderStatus";

export default class CancelledStatus extends OrderStatus {
  value: string;

  constructor(order: Order) {
    super(order)
    this.value = "cancelled"
  }

  confirm(): void {
    throw new Error("The order was already cancelled")
  }

  cancel(): void {
    throw new Error("The order was already cancelled")
  }
}