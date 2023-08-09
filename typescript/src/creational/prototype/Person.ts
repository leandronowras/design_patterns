import Prototype from "./iPrototype";

export default class Person implements Prototype {
  constructor(
    readonly name: string,
    readonly age: number,
  ){}

  clone(): Person {
    const newObj = new Person(this.name, this.age)

    return newObj
  }
}