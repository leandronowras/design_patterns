import Button from "../iButton";

export default class LightButton implements Button {
  color: string;
  backgroundColor: string;

  constructor() {
    this.color = 'black'
    this.backgroundColor = 'black'
  }
}