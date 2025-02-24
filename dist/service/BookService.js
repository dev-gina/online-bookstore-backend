"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookRepository_1 = __importDefault(require("../repository/BookRepository"));
exports.default = {
    getAllBooks: () => BookRepository_1.default.getAll(),
    getBookById: (id) => BookRepository_1.default.getById(id),
    addBook: (book) => BookRepository_1.default.add(Object.assign(Object.assign({}, book), { id: 0 })),
    updateBook: (id, book) => BookRepository_1.default.update(id, book),
    deleteBook: (id) => BookRepository_1.default.delete(id)
};
