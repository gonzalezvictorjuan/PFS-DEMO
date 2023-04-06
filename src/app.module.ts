import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { AppController } from "./app.controller";

import { AppService } from "./app.service";

import { PistaController } from "./pista/pista.controller";
import { PistaService } from "./pista/pista.service";
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client"),
    }),
  ],
  controllers: [AppController, PistaController, UserController],
  providers: [AppService, PistaService, UserService],
})
export class AppModule {}
