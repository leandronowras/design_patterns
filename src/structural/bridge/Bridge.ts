import RemoteControl from "./remote-control/RemoteControl";

export default class Bridge{
  constructor(
    readonly remoteControl: RemoteControl
  ) {}

  togglePower() {
    this.remoteControl.togglePower();
  }

  soundUp() {
    this.remoteControl.soundUp(); // 20
  }

  soundDown() {
    
    this.remoteControl.soundDown(); // 20
  }
}