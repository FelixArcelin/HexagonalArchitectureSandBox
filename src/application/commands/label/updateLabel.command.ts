import { ICommand, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FakeLabelRepository } from 'src/infrastructure/adapters/secondary/fakeLabelRepository';

export class UpdateLabel implements ICommand {
  constructor(public readonly UpdateLabelDto: any) {}
}

@CommandHandler(UpdateLabel)
export class UpdateLabelHandler implements ICommandHandler {
  constructor(private readonly LabelRepository: FakeLabelRepository) {}

  async execute(command: UpdateLabel): Promise<void> {
    this.LabelRepository.updateLabel(
      command.UpdateLabelDto.LabelToUpdate,
      command.UpdateLabelDto.updatedLabel,
    );
  }
}
