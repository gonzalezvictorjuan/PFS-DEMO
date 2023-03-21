import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { AppController } from './app.controller';
import { PistasController } from './controllers/pistas.controller';

import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, PistasController],
  providers: [AppService],
})
export class AppModule {}
