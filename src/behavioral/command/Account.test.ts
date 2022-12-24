import Account from "./Account"
import CreditCommand from "./commands/CreditCommand"
import DebitCommand from "./commands/DebitCommand"

test("Should create an account", () => {
  const account = new Account()
  const balance = account.getBalance()

  expect(balance).toBe(0)
})

test("Should add credit to an account", () => {
  const account = new Account()
  account.credit(100)
  const balance = account.getBalance() 

  expect(balance).toBe(100)
})

test("Should add credit to an account with command", () => {
  const account = new Account()

  const creditCommand = new CreditCommand(account, 100)
  creditCommand.execute()

  const balance = account.getBalance() 

  expect(balance).toBe(100)
})

test("Should debit an account", () => {
  const account = new Account()
  account.credit(100)
  account.debit(50)
  const balance = account.getBalance() 

  expect(balance).toBe(50)
})

test("Should debit an account with command", () => {
  const account = new Account()

  const creditCommand = new CreditCommand(account, 100)
  const debitCommand = new DebitCommand(account, 50)
  creditCommand.execute()
  debitCommand.execute()

  const balance = account.getBalance() 

  expect(balance).toBe(50)
})