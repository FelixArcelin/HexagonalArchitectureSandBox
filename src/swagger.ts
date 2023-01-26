import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SetupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('hexagonal-Poc')
    .setDescription(
      'The Band API Implemented with Port & Adapters architecture',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
}
