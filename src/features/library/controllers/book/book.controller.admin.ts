import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiConsumes, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BookAdminService } from "../../services/book/book.service.admin";
import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { FileInterceptor } from "@nestjs/platform-express";
import { storageOptions } from "@/configs/multer.configs";
import { BookCreateAdminDto } from "../../dtos/book/admin/book.create.dto.admin";
import { BookListAdminDto } from "../../dtos/book/admin/book.list.dto.admin";
import { BookDetailDtoAdmin } from "../../dtos/book/admin/book.detail.dto.admin";
import { BookUpdateAdminDto } from "../../dtos/book/admin/book.update.dto.admin";

@ApiTags('Book - Admin')
@ApiBearerAuth()
@Roles(Role.Admin, Role.SuperAdmin)
@Controller('admin/book')
export class BookControllerAdmin {
    constructor(private readonly service: BookAdminService) {

    }

    @Post()
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
    async create(@UploadedFile() image: Express.Multer.File, @Body() payload: BookCreateAdminDto) {
        return await this.service.create(payload, image)
    }


    @Get()
    @ApiOkResponse({ type: () => BookListAdminDto, isArray: true })
    async getAll(@Req() request: Request) {
        let userId = undefined
        // ts-ignore
        if (request.user) {
            // @ts-ignore
            userId = request.user.id
        }
        return await this.service.getAll(userId)
    }

    @Get(':id')
    @ApiOkResponse({ type: () =>  BookDetailDtoAdmin})
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<BookDetailDtoAdmin> {
    return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: BookUpdateAdminDto) {
        return await this.service.updateOne(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.service.delete(id)
    }
}