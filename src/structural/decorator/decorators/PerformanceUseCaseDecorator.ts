import UseCase from "./iUseCase"

export default class PerformanceUseCaseDecorator implements UseCase{
  constructor(
    readonly useCase: UseCase
    ) {}

  execute(input: any): void {
    console.time("performance")
    this.useCase.execute(input)
    console.timeEnd("performance")
  }
}