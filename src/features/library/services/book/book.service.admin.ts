import { Injectable, NotFoundException } from "@nestjs/common";
import { BookCreateAdminDto } from "../../dtos/book/admin/book.create.dto.admin";
import { Book } from "../../entities/book.entity";
import { Author } from "@/features/common/entities/author.entity";
import { BookCategory } from "../../entities/book-category.entity";
import { Language } from "@/features/common/entities/language.entity";
import { Difficulty } from "@/features/common/entities/difficulty.entity";
import { BookUpdateAdminDto } from "../../dtos/book/admin/book.update.dto.admin";
import { plainToInstance } from "class-transformer";
import { BookListAdminDto } from "../../dtos/book/admin/book.list.dto.admin";
import { BookDetailDtoAdmin } from "../../dtos/book/admin/book.detail.dto.admin";

@Injectable()
export class BookAdminService {
    async create(payload: BookCreateAdminDto, image: Express.Multer.File) {
     const book = Book.create(payload)
     book.image = image.path

     const authorExists = await Author.countBy({ id: payload.authorId })
     if (!authorExists) {
        throw new NotFoundException('Author with given id not found')
     }

     const categoryExists = await BookCategory.countBy({ id: payload.categoryId })
     if (!categoryExists) {
        throw new NotFoundException('BookCategory with given id not found')
     }

     const languageExists = await Language.countBy({ id: payload.languageId })
     if(!languageExists) {
        throw new NotFoundException('Language with given id not found')
     }

     const difficultyExists = await Difficulty.countBy({ id: payload.difficultyId })
     if (!difficultyExists) {
        throw new NotFoundException('Difficulty with given id not found')
     }

     await Book.save(book)
     return book
    }

    async updateOne(id: number, payload: BookUpdateAdminDto, image?: Express.Multer.File) {
        const book = await Book.findOneBy({ id })
        if (!book) {
            throw new NotFoundException('Book with given id not found')
        }

        if (payload.authorId) {
            const authorExists = await Author.countBy({ id: payload.authorId })
            if (!authorExists) {
                throw new NotFoundException('Author with given id not found')
            }
            book.authorId = payload.authorId
        }

        if (payload.categoryId) {
            const categoryExists = await BookCategory.countBy({ id: payload.categoryId })
            if (!categoryExists) {
                throw new NotFoundException('BookCategory with given id not found')
            }
            book.categoryId = payload.categoryId
        }

        if (payload.difficultyId) {
            const difficultyExists = await Difficulty.countBy({ id: payload.difficultyId })
            if (!difficultyExists) {
                throw new NotFoundException('Difficulty with given id not found')
            }
            book.difficultyId = payload.difficultyId
        }

        if (payload.languageId) {
            const languageExists = await Language.countBy({ id: payload.languageId })
            if (!languageExists) {
                throw new NotFoundException('Language with given id not found')
            }
            book.languageId = payload.languageId
        }

        Object.assign(
            book,
            Object.fromEntries(Object.entries(payload).filter(([key, value]) => value !== undefined))
        )

        if (image) {
            book.image = image.path
        }

        await Book.save(book)
        return book;    
    }


    async getAll(userId? : number) {
        const books = await Book.createQueryBuilder('books')
            .leftJoinAndSelect('books.likes', 'likes', 'likes.userId = :userId', {userId : userId})
            .leftJoinAndSelect('books.author', 'author')
            .leftJoinAndSelect('books.category', 'category')
            .leftJoinAndSelect('books.difficulty', 'difficulty')
            .leftJoinAndSelect('books.language', 'language')
            .getMany()

        if (userId) {
            for (const book of books) {
                // @ts-ignore
                book.isLiked = Boolean(book.likes?.length)
            }
        }

        return plainToInstance(BookListAdminDto, books, {excludeExtraneousValues: true})
    }

    async getOne(id: number) {
        const books = await Book.findOneBy({ id })
        const data = plainToInstance(BookDetailDtoAdmin, books, {excludeExtraneousValues: true})
        return data;
    }

    async delete(id: number) {
        const books = await Book.findOneBy({ id })
        if (!books) {
            throw new NotFoundException('Does not exist')
        }
        await Book.remove(books)
    }
}