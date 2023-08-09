import ConcreteMemento from "./ConcreteMemento"
import Memento from "./iMemento"

// Originator
export default class ImageEditor {
  constructor(
    public filePath: string,
    public fileFormat: string
  ){}

  convertFormatTo(format: "jpg" | "png" | "gif"): void {
    this.fileFormat = format
    this.filePath = this.filePath.split('.').slice(0, -1).join("")
    this.filePath += '.' + format
  }

  save(): Readonly<Memento> {
    const date = new Date()

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath, 
      this.fileFormat
      )
  }

  restore(memento: Memento): void{
    const concreteMemento = memento as ConcreteMemento
    this.filePath = concreteMemento.getFilePath()
    this.fileFormat = concreteMemento.getFileFormat() 
  }
}
