import { Request, Response } from "express";
import BookService from "../service/BookService";

interface IBookController {
  getAllBooks: (req: Request, res: Response) => void;
  getBookById: (req: Request, res: Response) => void;
  addBook: (req: Request, res: Response) => void;
  updateBook: (req: Request, res: Response) => void;
  deleteBook: (req: Request, res: Response) => void;
}

const BookController: IBookController = {
  getAllBooks: (req, res) => {
    const books = BookService.getAllBooks();
    res.json({ books, totalPages: 1 });
  },
  getBookById: (req, res) => {
    const book = BookService.getBookById(Number(req.params.id));
    if (!book) return res.status(404).json({ message: "책을 찾을 수 없습니다." });
    res.json(book);
  },
  addBook: (req, res) => {
    const book = BookService.addBook(req.body);
    res.status(201).json(book);
  },
  updateBook: (req, res) => {
    const book = BookService.updateBook(Number(req.params.id), req.body);
    if (!book) return res.status(404).json({ message: "책을 찾을 수 없습니다." });
    res.json(book);
  },
  deleteBook: (req, res) => {
    const success = BookService.deleteBook(Number(req.params.id));
    if (!success) return res.status(404).json({ message: "책을 찾을 수 없습니다." });
    res.status(204).send();
  }
};

export default BookController;
