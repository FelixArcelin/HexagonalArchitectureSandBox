import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateBandHandler } from './application/commands/band/createBand.command';
import { BandController } from './infrastructure/adapters/primary/controllers/band.controller';
import { GetAllBandsHandler } from './application/queries/band/getAllBands.query';
import { FakeBandRepository } from './infrastructure/adapters/secondary/fakeBandRepository';
import { LabelController } from './infrastructure/adapters/primary/controllers/label.controller';
import { FakeLabelRepository } from './infrastructure/adapters/secondary/fakeLabelRepository';

const commandHandlers = [CreateBandHandler];
const queryHandlers = [GetAllBandsHandler];
@Module({
  imports: [CqrsModule],
  controllers: [AppController, BandController, LabelController],
  providers: [
    AppService,
    FakeBandRepository,
    FakeLabelRepository,
    ...commandHandlers,
    ...queryHandlers,
  ],
})
export class AppModule {}
