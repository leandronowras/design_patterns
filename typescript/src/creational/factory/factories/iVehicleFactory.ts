import Vehicle from "../vehicle/iVehicle";

export default interface VehicleFactory {
  getVehicle(vehicleName: string): Vehicle

  pickup(customerName: string, vehicleName: string): Vehicle
}