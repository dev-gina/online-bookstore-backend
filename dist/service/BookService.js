"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const BookRepository_1 = require("../repository/BookRepository");
class BookService {
    static getAllBooks() {
        return __awaiter(this, arguments, void 0, function* (page = 1, limit = 10) {
            return yield BookRepository_1.BookRepository.getAllBooks(page, limit);
        });
    }
    static getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookRepository_1.BookRepository.getBookById(id);
        });
    }
    static addBook(title, author, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookRepository_1.BookRepository.addBook(title, author, quantity);
        });
    }
    static updateBook(id, title, author, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookRepository_1.BookRepository.updateBook(id, title, author, quantity);
        });
    }
    static deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookRepository_1.BookRepository.deleteBook(id);
        });
    }
}
exports.BookService = BookService;
