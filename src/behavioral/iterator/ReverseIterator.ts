import MyIterator from "./iMyIterator";
import MyDataStructure from "./MyDataStructure";

export default class ReverseIterator implements MyIterator<string>{
  private index = this.dataStructure.size()
  
  constructor(
    private readonly dataStructure: MyDataStructure
  ) {}

  reset(): void {
    this.index = this.dataStructure.size()
  }

  next(...args: [] | [undefined]): IteratorResult<string, any> {
    this.index--
    const returnValue = this.makeValue(this.dataStructure.getItems()[this.index])
    returnValue.done = this.index < 0
    return returnValue
  }

  private makeValue(value: string): IteratorResult<string> {
    return  { value, done: false }
  }
}