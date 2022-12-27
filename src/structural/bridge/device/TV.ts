import Device from "./iDevice";

export default class TV implements Device {
  public volume = 10
  public power = false
  public name = "TV"

  getName(): string {
    return this.name
  }
  
  setPower(powerStatus: boolean): void {
    this.power = powerStatus
  }

  getPower(): boolean {
    return this.power
  }

  setSound(volume: number): void {
    if (volume < 0) return
    if (volume > 100) return
    this.volume = volume
  }
  
  getSound(): number {
    return this.volume
  }
}