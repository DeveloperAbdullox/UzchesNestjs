import { PaginatedResult } from "@/features/common/dtos/paginated-result.dto";
import { PaginationFilters } from "@/features/common/filters/pagination.filters";
import { Query } from "@nestjs/cqrs";

export class BookCategoryGetAllQuery extends Query<PaginatedResult> {
    constructor(public readonly filters: PaginationFilters) {
        super()
    }
}