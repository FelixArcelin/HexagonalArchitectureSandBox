import {
    QueryHandler,
    IQueryHandler,
  } from '@nestjs/cqrs';
  import { Band } from 'src/domain/entities/Band';
  import { FakeBandRepository } from 'src/infrastructure/adapters/secondary/fakeBandRepository';
  
  export class GetAllBands {}
  
  @QueryHandler(GetAllBands)
  export class GetAllBandsHandler implements IQueryHandler<GetAllBands> {
    constructor(private readonly BandRepository: FakeBandRepository) {}
  
    async execute(BandName: string): Promise<Band> {
      return this.BandRepository.getBandByName(BandName);
    }
  }
  