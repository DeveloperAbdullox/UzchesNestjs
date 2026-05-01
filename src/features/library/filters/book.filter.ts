import { PaginationFilters } from "@/features/common/filters/pagination.filters";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional } from "class-validator";

export class BookFilters extends PaginationFilters {
    @IsInt()
    @IsOptional()
    @ApiProperty({ required: false })
    languageId?: number;

    @IsInt()
    @IsOptional()
    @ApiProperty({ required: false })
    categoryId?: number;

    @IsInt()
    @IsOptional()
    @ApiProperty({ required: false })
    difficultyId?: number;

    @IsInt()
    @IsOptional()
    @ApiProperty({ required: false })
    rating?: number;
}