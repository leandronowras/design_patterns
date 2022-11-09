import DarkThemeFactory from "./widgets/concrete_factories/DarkThemeFactory"
import LigthThemeFactory from "./widgets/concrete_factories/LightThemeFactory"
import View from "./View"

test("Should create a view with light theme", () => {
  const view = new View(new LigthThemeFactory())
  expect(view.label.color).toBe("black")
  expect(view.button.color).toBe("white")
  expect(view.button.backgroundColor).toBe("blue")
})

test("Should create a view with dark theme", () => {
  const view = new View(new DarkThemeFactory())
  expect(view.label.color).toBe("white")
  expect(view.button.color).toBe("black")
  expect(view.button.backgroundColor).toBe("black")
})