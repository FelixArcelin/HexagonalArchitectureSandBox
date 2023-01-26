import { ICommand, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FakeLabelRepository } from "src/infrastructure/adapters/secondary/fakeLabelRepository";

export class DeleteLabel implements ICommand {
  constructor(public readonly DeleteLabelDto: any) {}
}

@CommandHandler(DeleteLabel)
export class DeleteLabelHandler implements ICommandHandler {
  constructor(private readonly LabelRepository: FakeLabelRepository) {
  }

  async execute(command: any): Promise<void> {
    this.LabelRepository.deleteLabel(command)
  }

}