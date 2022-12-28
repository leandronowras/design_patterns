import DefaultIterator from "./DefaultIterator"
import MyIterator from "./iMyIterator"

export default class MyDataStructure {
  private items: string[] = []
  private iterator: MyIterator<string> = new DefaultIterator(this)

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item))
  }

  getItems(): string[] {
    return this.items
  }
  
  size(): number {
    return this.items.length
  }

  changeIterator(iterator: MyIterator<string>): void {
    this.iterator = iterator
  }

  [Symbol.iterator](): MyIterator<string> {
    this.iterator.reset()
    return this.iterator
  }
}