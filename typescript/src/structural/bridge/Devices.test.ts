import Bridge from "./Bridge"
import Radio from "./device/Radio"
import TV from "./device/TV"
import RemoteControl from "./remote-control/RemoteControl"

test("Should create a bridge with device and remote control", () => {
  const tv = new TV()
  const radio = new Radio()

  const tvRemoteControl = new RemoteControl(tv)
  const radioRemoteControl = new RemoteControl(radio)

  const bridgeTv = new Bridge(tvRemoteControl)
  bridgeTv.togglePower()
  bridgeTv.soundUp()

  const bridgeRadio = new Bridge(radioRemoteControl)
  bridgeRadio.togglePower()
  bridgeRadio.soundUp()
  bridgeRadio.soundUp()
  bridgeRadio.soundUp()
  bridgeRadio.soundUp()

  expect(tv.volume).toBe(20)
  expect(radio.volume).toBe(50)
})