import PaypalTransaction from "./transaction/payment_gateways/paypal/PaypalTransaction"
import PaypalTransactionAdapter from "./transaction/payment_gateways/paypal/PaypalTransactionAdapter"
import StripeTransaction from "./transaction/payment_gateways/stripe/StripeTransaction"
import StripeTransactionAdapter from "./transaction/payment_gateways/stripe/StripeTransactionAdapter"

test('Should create a Stripe Transaction', () => {
  const stripeTransaction = new StripeTransaction("n1oi2n12ioen", 1000, 2)
  expect(stripeTransaction.code).toBe('n1oi2n12ioen')
})

test('Should create a Paypal Transaction', () => {
  const paypalTransaction = new PaypalTransaction(432342, 1000, "S")
  expect(paypalTransaction.id).toBe(432342)
})

test('Should create a transaction from Stripe', () => {
  const stripeTransaction = new StripeTransaction("n1oi2n12ioen", 1000, 2)
  const transaction = new StripeTransactionAdapter(stripeTransaction)
  expect(transaction.trackNumber).toBe('n1oi2n12ioen')
  expect(transaction.amount).toBe(1000)
  expect(transaction.status).toBe('paid')
})

test('Should create a transaction from Paypal', () => {
  const paypalTransaction = new PaypalTransaction(432342, 1000, "S")
  const transaction = new PaypalTransactionAdapter(paypalTransaction)
  expect(transaction.trackNumber).toBe("432342")
  expect(transaction.amount).toBe(1000)
  expect(transaction.status).toBe("paid")
})