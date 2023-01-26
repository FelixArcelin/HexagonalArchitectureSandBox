import { ICommand, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FakeBandRepository } from "src/infrastructure/adapters/secondary/fakeBandRepository";

export class DeleteBand implements ICommand {
  constructor(public readonly DeletebandDto: any) {}
}

@CommandHandler(DeleteBand)
export class DeleteBandHandler implements ICommandHandler {
  constructor(private readonly bandRepository: FakeBandRepository) {
  }

  async execute(command: any): Promise<void> {
    this.bandRepository.deleteBand(command)
  }

}