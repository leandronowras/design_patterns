export default interface Device {
  getName(): string
  setPower(powerStatus: boolean): void
  getPower(): boolean
  setSound(volume: number): void
  getSound(): number
}