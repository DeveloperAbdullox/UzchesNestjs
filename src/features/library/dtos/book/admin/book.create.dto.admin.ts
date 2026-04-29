import { Allow, IsDateString, IsInt, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookCreateAdminDto {
  @IsInt()
  @ApiProperty()
  authorId!: number;

  @IsInt()
  @ApiProperty()
  categoryId!: number;

  @IsInt()
  @ApiProperty()
  languageId!: number;

  @IsInt()
  @ApiProperty()
  difficultyId!: number;

  @IsString()
  @MaxLength(256)
  @ApiProperty()
  title!: string;

  @IsOptional()
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  image?: string;

  @IsString()
  @ApiProperty()
  description!: string;

  @IsNumber()
  @ApiProperty()
  price!: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  newPrice?: number;

  @IsNumber()
  @Max(5)
  @Min(1)
  @ApiProperty()
  @IsOptional()
  rating?: number;

  @IsInt()
  @ApiProperty({ default: 0 })
  reviewsCount!: number;

  @IsInt()
  @ApiProperty()
  pages!: number;

  @IsDateString()
  @ApiProperty()
  pubDate!: string;
}