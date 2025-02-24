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
exports.BookController = void 0;
const BookService_1 = require("../service/BookService");
class BookController {
    static getAllBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield BookService_1.BookService.getAllBooks();
                res.status(200).json(books);
            }
            catch (error) {
                console.error("책 목록 불러오기 실패:", error);
                res.status(500).json({ message: "책 목록을 불러올 수 없습니다." });
            }
        });
    }
    static getBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookId = Number(req.params.id);
                const book = yield BookService_1.BookService.getBookById(bookId);
                if (!book) {
                    res.status(404).json({ message: "책을 찾을 수 없습니다." });
                    return;
                }
                res.status(200).json(book);
            }
            catch (error) {
                console.error("책 상세 정보 불러오기 실패:", error);
                res.status(500).json({ message: "책 상세 정보를 불러올 수 없습니다." });
            }
        });
    }
    static addBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, author, quantity } = req.body;
                const newBook = yield BookService_1.BookService.addBook(title, author, quantity);
                res.status(201).json(newBook);
            }
            catch (error) {
                console.error("책 추가 실패:", error);
                res.status(500).json({ message: "책을 추가할 수 없습니다." });
            }
        });
    }
    static updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookId = Number(req.params.id);
                const { title, author, quantity } = req.body;
                yield BookService_1.BookService.updateBook(bookId, title, author, quantity);
                res.json({ message: "책 정보가 업데이트되었습니다." });
            }
            catch (error) {
                console.error("책 정보 업데이트 실패:", error);
                res.status(500).json({ message: "책 정보를 업데이트할 수 없습니다." });
            }
        });
    }
    static deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookId = Number(req.params.id);
                yield BookService_1.BookService.deleteBook(bookId);
                res.json({ message: "책이 삭제되었습니다." });
            }
            catch (error) {
                console.error("책 삭제 실패:", error);
                res.status(500).json({ message: "책을 삭제할 수 없습니다." });
            }
        });
    }
}
exports.BookController = BookController;
