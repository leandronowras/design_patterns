export default interface MyIterator<T> extends Iterator<T> {
  reset(): void
}