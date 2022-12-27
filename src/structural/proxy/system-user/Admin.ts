import SystemUserProtocol from "./iSystemUserProtocol";

export default class Admin implements SystemUserProtocol{
  constructor(
    public firstName: string,
    public username: string
  ) {

  }

  async getAddresses(): Promise<{ street: string; number: number; }[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: "Aguas Claras", number: 3}
        ])
      }, 2000)
    })
  }
}