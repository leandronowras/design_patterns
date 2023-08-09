export default class Member {
  constructor(
    readonly name: string,

  ) {}

  send(to: Member, message: string) {
    to.receive(this, message)
  }

  receive(from: Member, message: string) {
    // console.log(`Member ${from.name} send to ${this.name} the message: ${message}`)
  }
}