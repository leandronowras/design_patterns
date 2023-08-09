export default class StripeTransaction {
  constructor(
    // names that stripe uses
    readonly code: string,
    readonly grossAmount: number,
    readonly situation: number
  ) {}
}