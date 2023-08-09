import Member from "./Member";

export default class Channel {
  members: Member[];

  constructor() {
    this.members = []
  }

  register(member: Member) {
    this.members.push(member)
  }

  sendAll(from: Member, message: string) { 
    this.members.forEach(member => {
      if (member !== from) {
        member.receive(from, message)
      }
    })
  }
} 