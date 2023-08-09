import Device from "../device/iDevice";

export default class RemoteControl {
  constructor( 
    public device: Device
    ) {}

    togglePower(): void {
      this.device.setPower(!this.device.getPower)
    }

    soundUp(): void {
      const oldSound = this.device.getSound();
      this.device.setSound(this.device.getSound() + 10);
      // console.log(
      //   `${this.device.getName()} +${this.device.getSound()}`,
      // );
    }
  
    soundDown(): void {
      const oldSound = this.device.getSound();
      this.device.setSound(this.device.getSound() - 10);
      // console.log(
      //   `${this.device.getName()} -${this.device.getSound()}`,
      // );
    }
}