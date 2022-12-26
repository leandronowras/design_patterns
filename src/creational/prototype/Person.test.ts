import Person from "./Person"

test("should clone a person", () => {
  const person1 = new Person("Leandro", 23)
  expect(person1.name).toBe("Leandro")
  expect(person1.age).toBe(23)
  
  const person2 = person1.clone()
  expect(person2.name).toBe("Leandro")
  expect(person2.age).toBe(23)
})

