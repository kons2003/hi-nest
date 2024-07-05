import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}