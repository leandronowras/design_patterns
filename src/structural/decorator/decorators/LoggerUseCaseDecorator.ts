import UseCase from "./iUseCase";

export default class LoggerUseCaseDecorator implements UseCase{
  constructor(
    readonly useCase: UseCase
    ) {}

  execute(input: any): void {
    console.log("executando LoggerUseCase")
    this.useCase.execute(input)
  }
}