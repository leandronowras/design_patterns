import ImageEditor from "./ImageEditor";
import Memento from "./iMemento";

export default class ImageEditorBackupManager {
  private mementos: Memento[] = []

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    // saves the state
    this.mementos.push(this.imageEditor.save())
  }

  undo(): void | Memento {
    const memento = this.mementos.pop()

    if (!memento) return

    this.imageEditor.restore(memento)

    return memento
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento)
    }
  }
}