import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBand } from 'src/application/commands/band/createBand.command';
import { DeleteBand } from 'src/application/commands/band/deleteBand.command';
import { Band } from 'src/domain/entities/band';
import { GetAllBands } from '../../../../application/queries/band/getAllBands.query';

@Controller('/band')
export class BandController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('create')
  async createBand(@Body() body: any) {
    return await this.commandBus.execute<CreateBand>(body);
  }

  @Get('all')
  async getAllBands(): Promise<Band[]> {
    return await this.queryBus.execute<GetAllBands>(new GetAllBands());
  }

  @Delete('delete')
  async deleteBand(@Param() bandName: string): Promise<void> {
    return await this.commandBus.execute<DeleteBand>(
      new DeleteBand({ name: bandName }),
    );
  }
}
