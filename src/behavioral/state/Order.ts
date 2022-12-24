import OrderStatus from "./OrderStatus/AbstractOrderStatus";
import PendingStatus from "./OrderStatus/PendingStatus";

export default class Order {
  status: OrderStatus;

  constructor() {
    this.status = new PendingStatus(this);
  }

  confirm() {
    this.status.confirm()
  }

  cancel() {
    this.status.cancel()
  }
}
