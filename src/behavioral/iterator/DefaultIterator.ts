import MyIterator from "./iMyIterator";
import MyDataStructure from "./MyDataStructure";

export default class DefaultIterator implements MyIterator<string>{
  private index = 0
  
  constructor(
    private readonly dataStructure: MyDataStructure
  ) {}

  reset(): void {
    this.index = 0
  }

  next(...args: [] | [undefined]): IteratorResult<string, any> {
    const returnValue = this.makeValue(this.dataStructure.getItems()[this.index])
    returnValue.done = this.index >= this.dataStructure.size()
    this.index++
    return returnValue
  }

  private makeValue(value: string): IteratorResult<string> {
    return  { value, done: false }
  }
}