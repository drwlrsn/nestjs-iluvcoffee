import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { TeasService } from './teas/teas.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, TeasService],
})
export class AppModule {}
