import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BookListAdminDto {
  @ApiProperty()
  @Expose()
  id!: number;

  @ApiProperty()
  @Expose()
  title!: string;

  @ApiProperty()
  @Expose()
  image?: string;

  @ApiProperty()
  @Expose()
  description!: string;

  @ApiProperty()
  @Expose()
  price!: number;

  @ApiProperty()
  @Expose()
  newPrice?: number;

  @ApiProperty()
  @Expose()
  rating?: number;

  @ApiProperty()
  @Expose()
  reviewsCount!: number;

  @ApiProperty()
  @Expose()
  pages!: number;

  @ApiProperty()
  @Expose()
  pubDate!: string;

  @ApiProperty()
  @Expose()
  created!: string;

  @ApiProperty()
  @Expose()
  updated?: string;
}
