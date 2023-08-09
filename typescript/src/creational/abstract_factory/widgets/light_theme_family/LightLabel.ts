import Label from "../iLabel";

export default class LightLabel implements Label {
  color: string;
  constructor () {
    this.color = "black"
  }
}