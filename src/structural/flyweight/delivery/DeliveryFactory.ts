import DeliveryLocation from './DeliveryLocation';
import { DeliveryLocationDictionary, DeliveryLocationData } from './DeliveryTypes';
import DeliveryFlyweight from './iDeliveryFlyweight';

export default class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {}

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map(item => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_')
  }

  makeLocation(sharedLocation: DeliveryLocationData): DeliveryFlyweight{
    const key = this.createId(sharedLocation)
    if (key in this.locations) return this.locations[key]
    this.locations[key] = new DeliveryLocation(sharedLocation)
    return this.locations[key]
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations
  }
}