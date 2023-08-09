import UseCase from "../decorators/iUseCase";

export default class SimulateFreight implements UseCase{
  constructor(){}

  execute(input: any) {
    console.log('executando simulate freigth')
  }
}