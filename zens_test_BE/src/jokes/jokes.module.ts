import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
