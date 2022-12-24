export interface Observer {
  notify(name: string, value: string): void
}