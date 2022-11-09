import iAbstractWidgetFactory from "../iAbstractWidgetFactory";
import iButton from "../iButton";
import iLabel from "../iLabel";
import LightButton from "../light_theme_family/LightButton";
import LightLabel from "../light_theme_family/LightLabel";

export default class LigthThemeFactory implements iAbstractWidgetFactory {
  createLabel(): iLabel {
    return new LightLabel()
  }
  createButton(): iButton {
    return new LightButton
  }
}