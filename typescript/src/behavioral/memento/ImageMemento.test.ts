import ImageEditor from "./ImageEditor"
import ImageEditorBackupManager from "./ImageEditorBackupManager"

test("Should restore the state of an image", () => {
  const imageEditor = new ImageEditor('media/image.png', "png")
  const backupManager = new ImageEditorBackupManager(imageEditor)

  backupManager.backup() // saves the state before change
  imageEditor.convertFormatTo("gif")
  expect(imageEditor.fileFormat).toBe("gif")

  backupManager.undo()
  expect(imageEditor.fileFormat).toBe("png")
})