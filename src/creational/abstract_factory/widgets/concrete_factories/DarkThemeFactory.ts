import DarkButton from "../dark_theme_family/DarkButton";
import DarkLabel from "../dark_theme_family/DarkLabel";
import iAbstractWidgetFactory from "../iAbstractWidgetFactory";
import iButton from "../iButton";
import iLabel from "../iLabel";

export default class LigthThemeFactory implements iAbstractWidgetFactory {
  createLabel(): iLabel {
    return new DarkLabel()
  }
  createButton(): iButton {
    return new DarkButton()
  }
}