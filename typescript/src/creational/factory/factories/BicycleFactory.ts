import Car from "../vehicle/Car";
import VehicleFactory from "./iVehicleFactory";

export default class BicycleFactory implements VehicleFactory {
  getVehicle(vehicleName: string) {
    return new Car(vehicleName)
  }

  pickup(customerName: string, vehicleName: string) {
    const car = this.getVehicle(vehicleName)
    car.pickUp(customerName)
    return car
  }
}