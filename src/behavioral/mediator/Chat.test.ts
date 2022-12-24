import Channel from "./Channel"
import Member from "./Member"

test("Should exchange messages among members", () => {
  const memberA = new Member("A") 
  const memberB = new Member("B") 
  const memberC = new Member("C") 
  
  memberA.send(memberB, "hello")
  memberA.send(memberC, "hello")
  memberB.send(memberA, "hello, how are you?")
  memberC.send(memberA, "hello, how are you?")
})

test("Should exchange messages among members inside channel", () => {
  const memberA = new Member("A") 
  const memberB = new Member("B") 
  const memberC = new Member("C") 
  
  memberA.send(memberB, "hello")
  memberA.send(memberC, "hello")
  memberB.send(memberA, "hello, how are you?")
  memberC.send(memberA, "hello, how are you?")

  const channel = new Channel()
  channel.register(memberA)
  channel.register(memberB)
  channel.register(memberC)
  channel.sendAll(memberA, "Hello")
})