import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Label } from 'src/domain/entities/Label';
import { FakeLabelRepository } from 'src/infrastructure/adapters/secondary/fakeLabelRepository';

export class GetAllLabels {}

@QueryHandler(GetAllLabels)
export class GetAllLabelsHandler implements IQueryHandler<GetAllLabels> {
  constructor(private readonly LabelRepository: FakeLabelRepository) {}

  async execute(): Promise<Label[]> {
    return this.LabelRepository.getAllLabels();
  }
}
