import InputText from "./InputText"
import Label from "./Label"

test("Should write inside input and show it on the label", () => {
  const inputText = new InputText("country")
  const label = new Label("Country: {{country}}")
  inputText.register(label)
  inputText.setValue("Brazil")
  expect(label.value).toBe("Country: Brazil")

  inputText.setValue("Canada")
  expect(label.value).toBe("Country: Canada")
})
