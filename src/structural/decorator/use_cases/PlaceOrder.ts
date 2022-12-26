import UseCase from "../decorators/iUseCase";

export default class PlaceOrder implements UseCase {
  constructor(){}

  execute(input: any) {
    console.log('executando place order')
  }
}