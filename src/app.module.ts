import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//  Decorators são uma forma de metaprogramação, onde você pode modificar ou estender
// a funcionalidade de uma classe ou função sem modificar seu código diretamente.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
