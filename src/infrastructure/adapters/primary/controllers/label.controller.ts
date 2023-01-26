import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateLabel } from 'src/application/commands/label/createLabel.command';
import { DeleteLabel } from 'src/application/commands/label/deleteLabel.command';
import { Label } from 'src/domain/entities/Label';
import { GetAllLabels } from '../../../../application/queries/band/getAllLabels.query';

@Controller('/label')
export class LabelController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('create')
  async createLabel(@Body() createLabelBody: any) {
    return await this.commandBus.execute<CreateLabel>(createLabelBody);
  }

  @Get('all')
  async getAllLabels(): Promise<Label[]> {
    return await this.queryBus.execute<GetAllLabels>(new GetAllLabels());
  }

  @Delete('delete')
  async deleteLabel(@Param() labelName: string): Promise<void> {
    return await this.commandBus.execute<DeleteLabel>(
      new DeleteLabel({ name: labelName }),
    );
  }
}
