import Connection from "./Connection"

test("should connect at the same instance", () => {
  const connection1 = Connection.getInstance()
  const connection2 = Connection.getInstance()

  expect(connection1.id).toBe(connection2.id)
})