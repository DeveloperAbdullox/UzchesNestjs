import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AuthorListPublicDto } from '@/features/common/dtos/author/public/author.list.public.dto';
import { BookCategoryListDtoPublic } from '@/features/library/dtos/book-category/public/book-category.list.dto.public';
import { LanguageListPublicDto } from '@/features/common/dtos/language/public/language.list.public.dto';
import { DifficultyListPublicDto } from '@/features/common/dtos/difficulty/public/difficulty.list.public.dto';

export class BookListDtoPublic {
  @ApiProperty()
  @Expose()
  id!: number;

  @ApiProperty({ type: AuthorListPublicDto })
  @Expose()
  @Type(() => AuthorListPublicDto)
  author!: AuthorListPublicDto;

  @ApiProperty({ type: BookCategoryListDtoPublic })
  @Expose()
  @Type(() => BookCategoryListDtoPublic)
  category!: BookCategoryListDtoPublic;

  @ApiProperty({ type: LanguageListPublicDto })
  @Expose()
  @Type(() => LanguageListPublicDto)
  language!: LanguageListPublicDto;

  @ApiProperty({ type: DifficultyListPublicDto })
  @Expose()
  @Type(() => DifficultyListPublicDto)
  difficulty!: DifficultyListPublicDto;

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
}
