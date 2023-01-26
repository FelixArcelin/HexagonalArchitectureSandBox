import { ICommand, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FakeLabelRepository } from "src/infrastructure/adapters/secondary/fakeLabelRepository";

export class CreateLabel implements ICommand {
  constructor(public readonly createLabelDto: any) {}
}

@CommandHandler(CreateLabel)
export class CreateLabelHandler implements ICommandHandler {
  constructor(private readonly LabelRepository: FakeLabelRepository) {
  }

  async execute(command: any): Promise<void> {
    this.LabelRepository.createLabel(command)
  }

}