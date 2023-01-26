import { ICommand, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FakeBandRepository } from 'src/infrastructure/adapters/secondary/fakeBandRepository';

export class UpdateBand implements ICommand {
  constructor(public readonly UpdatebandDto: any) {}
}

@CommandHandler(UpdateBand)
export class UpdateBandHandler implements ICommandHandler {
  constructor(private readonly bandRepository: FakeBandRepository) {}

  async execute(command: UpdateBand): Promise<void> {
    this.bandRepository.updateBand(
      command.UpdatebandDto.bandToUpdate,
      command.UpdatebandDto.updatedband,
    );
  }
}
