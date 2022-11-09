import AbstractWidgetFactory from "./widgets/iAbstractWidgetFactory"
import Button from "./widgets/iButton"
import Label from "./widgets/iLabel"

export default class View {
  //new
  label: Label
  button: Button

  //old
  // label: LightLabel
  // button: LightButton

  //new
  constructor(abstractWidgetFactory: AbstractWidgetFactory) {
    this.label = abstractWidgetFactory.createLabel()
    this.button = abstractWidgetFactory.createButton()
  }

  // old
  // constructor() {
  //   this.label = new LightLabel()
  //   this.button = new LightButton()
  // }
}