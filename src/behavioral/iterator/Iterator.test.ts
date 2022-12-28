import MyDataStructure from "./MyDataStructure"
import ReverseIterator from "./ReverseIterator"

test("Should default iterate ", () => {
  const dataStructure = new MyDataStructure()
  dataStructure.addItem("A", "B", "C", "D")

  const [a,b] = dataStructure
  
  expect(a).toBe("A")
  expect(b).toBe("B")
})

test("Should reverse iterate ", () => {
  const dataStructure = new MyDataStructure()
  dataStructure.addItem("A", "B", "C", "D")

  dataStructure.changeIterator(new ReverseIterator(dataStructure))
  const [a,b] = dataStructure
  
  expect(a).toBe("D")
  expect(b).toBe("C")
})
