import SystemUserProtocol from "./iSystemUserProtocol";
import Admin from "./Admin";

export default class SystemUserProxy implements SystemUserProtocol{
  private realUser: SystemUserProtocol | null = null
  private realUserAddresses: SystemUserProtocol[] | null | any = null

  constructor(
    public firstName: string,
    public username: string
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new Admin(this.firstName, this.username)
    }

    return this.realUser
  }

  async getAddresses(): Promise<{ street: string; number: number; }[]> {
    this.realUser = this.createUser()

    if(this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses()
    }

    return this.realUser?.getAddresses()
  }
}