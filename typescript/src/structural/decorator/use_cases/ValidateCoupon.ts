import UseCase from "../decorators/iUseCase";

export default class ValidateCoupon implements UseCase{
  constructor(){}

  execute(input: any) {
    console.log('executando validate coupon')
  }
}