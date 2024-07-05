import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    @IsNumber()
    readonly year: number;
  
    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}