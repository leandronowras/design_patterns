import { DeliveryLocationData } from "./DeliveryTypes";
import DeliveryFlyweight from "./iDeliveryFlyweight";

export default class DeliveryLocation implements DeliveryFlyweight {
  constructor(
    private readonly sharedState: DeliveryLocationData // cannot change
  ) {}
  deliver(name: string, number: string): void {
    // console.log(`Deliver to ${name}`)
    // console.log(`at ${this.sharedState.street}, ${this.sharedState.city}`)
    // console.log(`number: ${number}`)
  }
}