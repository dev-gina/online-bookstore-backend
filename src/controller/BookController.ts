import { Request, Response } from "express";
import { BookService } from "../service/BookService";

export class BookController {
  static async getAllBooks(req: Request, res: Response): Promise<void> {
    try {
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 1000;
      const books = await BookService.getAllBooks(page, limit);
      res.status(200).json(books);
    } catch (error) {
      console.error("책 목록 불러오기 실패:", error);
      res.status(500).json({ message: "책 목록을 불러올 수 없습니다." });
    }
  }

  static async getBookById(req: Request, res: Response): Promise<void> {
    try {
      const bookId = Number(req.params.id);
      const book = await BookService.getBookById(bookId);
      if (!book) {
        res.status(404).json({ message: "책을 찾을 수 없습니다." });
        return;
      }
      res.status(200).json(book);
    } catch (error) {
      console.error("책 상세 정보 불러오기 실패:", error);
      res.status(500).json({ message: "책 상세 정보를 불러올 수 없습니다." });
    }
  }

  static async addBook(req: Request, res: Response): Promise<void> {
    try {
      const { title, author, quantity } = req.body;
      const newBook = await BookService.addBook(title, author, quantity);
      res.status(201).json(newBook);
    } catch (error) {
      console.error("책 추가 실패:", error);
      res.status(500).json({ message: "책을 추가할 수 없습니다." });
    }
  }

  static async updateBook(req: Request, res: Response): Promise<void> {
    try {
      const bookId = Number(req.params.id);
      let { title, author, quantity } = req.body;

      if (title === undefined || author === undefined) {
        const existingBook = await BookService.getBookById(bookId);
        if (!existingBook) {
          res.status(404).json({ message: "책을 찾을 수 없습니다." });
          return;
        }
        if (title === undefined) title = existingBook.title;
        if (author === undefined) author = existingBook.author;
      }
      await BookService.updateBook(bookId, title, author, quantity);
      res.json({ message: "책 정보가 업데이트되었습니다." });
    } catch (error) {
      console.error("책 정보 업데이트 실패:", error);
      res.status(500).json({ message: "책 정보를 업데이트할 수 없습니다." });
    }
  }

  static async deleteBook(req: Request, res: Response): Promise<void> {
    try {
      const bookId = Number(req.params.id);
      await BookService.deleteBook(bookId);
      res.json({ message: "책이 삭제되었습니다." });
    } catch (error) {
      console.error("책 삭제 실패:", error);
      res.status(500).json({ message: "책을 삭제할 수 없습니다." });
    }
  }
}