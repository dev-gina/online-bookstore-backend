"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookService_1 = __importDefault(require("../service/BookService"));
const BookController = {
    getAllBooks: (req, res) => {
        const books = BookService_1.default.getAllBooks();
        res.json({ books, totalPages: 1 });
    },
    getBookById: (req, res) => {
        const book = BookService_1.default.getBookById(Number(req.params.id));
        if (!book)
            return res.status(404).json({ message: "책을 찾을 수 없습니다." });
        res.json(book);
    },
    addBook: (req, res) => {
        const book = BookService_1.default.addBook(req.body);
        res.status(201).json(book);
    },
    updateBook: (req, res) => {
        const book = BookService_1.default.updateBook(Number(req.params.id), req.body);
        if (!book)
            return res.status(404).json({ message: "책을 찾을 수 없습니다." });
        res.json(book);
    },
    deleteBook: (req, res) => {
        const success = BookService_1.default.deleteBook(Number(req.params.id));
        if (!success)
            return res.status(404).json({ message: "책을 찾을 수 없습니다." });
        res.status(204).send();
    }
};
exports.default = BookController;
