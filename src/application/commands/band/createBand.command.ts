import { ICommand, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FakeBandRepository } from "src/infrastructure/adapters/secondary/fakeBandRepository";

export class CreateBand implements ICommand {
  constructor(public readonly createbandDto: any) {}
}

@CommandHandler(CreateBand)
export class CreateBandHandler implements ICommandHandler {
  constructor(private readonly bandRepository: FakeBandRepository) {
  }

  async execute(command: any): Promise<void> {
    this.bandRepository.createBand(command)
  }

}