import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Band } from 'src/domain/entities/band';
import { FakeBandRepository } from 'src/infrastructure/adapters/secondary/fakeBandRepository';

export class GetAllBands {}

@QueryHandler(GetAllBands)
export class GetAllBandsHandler implements IQueryHandler<GetAllBands> {
  constructor(private readonly bandRepository: FakeBandRepository) {}

  async execute(): Promise<Band[]> {
    return this.bandRepository.getAllBands();
  }
}
