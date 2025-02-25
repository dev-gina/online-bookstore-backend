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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
class BookRepository {
    static getAllBooks() {
        return __awaiter(this, arguments, void 0, function* (page = 1, limit = 1000) {
            const offset = (page - 1) * limit;
            const [rows] = yield database_1.default.query("SELECT * FROM books ORDER BY id DESC LIMIT ? OFFSET ?", [limit, offset]);
            return rows;
        });
    }
    static getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.default.query("SELECT * FROM books WHERE id = ?", [id]);
            const books = rows;
            return books.length > 0 ? books[0] : null;
        });
    }
    static addBook(title, author, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield database_1.default.query("INSERT INTO books (title, author, quantity) VALUES (?, ?, ?)", [title, author, quantity]);
            return { id: result.insertId, title, author, quantity };
        });
    }
    static updateBook(id, title, author, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("UPDATE books SET title = ?, author = ?, quantity = ? WHERE id = ?", [title, author, quantity, id]);
        });
    }
    static deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE FROM books WHERE id = ?", [id]);
        });
    }
}
exports.BookRepository = BookRepository;
