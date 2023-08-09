import Button from "./iButton";
import Label from "./iLabel";

// create the object family
export default interface AbstractWidgetFactory {
  createLabel(): Label
  createButton(): Button
}