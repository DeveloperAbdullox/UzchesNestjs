import { BaseRepository } from "@/core/repositories/base.repository";
import { Injectable } from "@nestjs/common";
import { Book } from "../entities/book.entity";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class Bookrepository extends BaseRepository<Book> {
    constructor (protected config: ConfigService, @InjectRepository(Book) protected repo: Repository<Book>) {
        super();    
    }
}