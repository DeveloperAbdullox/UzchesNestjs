import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AuthorListAdminDto } from '@/features/common/dtos/author/admin/author.list.admin.dto';
import { BookCategoryListDtoAdmin } from '@/features/library/dtos/book-category/admin/book-category.list.dto.admin';
import { LanguageListPublicDto } from '@/features/common/dtos/language/public/language.list.public.dto';
import { DifficultyListPublicDto } from '@/features/common/dtos/difficulty/public/difficulty.list.public.dto';

export class BookDetailDtoAdmin {
  @ApiProperty()
  @Expose()
  id!: number;

  @ApiProperty({ type: AuthorListAdminDto })
  @Expose()
  @Type(() => AuthorListAdminDto)
  author!: AuthorListAdminDto;

  @ApiProperty({ type: BookCategoryListDtoAdmin })
  @Expose()
  @Type(() => BookCategoryListDtoAdmin)
  category!: BookCategoryListDtoAdmin;

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

  @ApiProperty()
  @Expose()
  created!: string;

  @ApiProperty()
  @Expose()
  updated?: string;
}
