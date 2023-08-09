export default interface SystemUserProtocol {
  firstName: string
  username: string
  getAddresses(): Promise<{street: string, number: number}[]>
}