import { ResultSetHeader } from "mysql2";
import db from "../config/database";

export interface Book {
  id: number;
  title: string;
  author: string;
  quantity: number;
}

export class BookRepository {

  static async getAllBooks(page: number = 1, limit: number = 10): Promise<Book[]> {
    const offset = (page - 1) * limit;
    const [rows] = await db.query("SELECT * FROM books LIMIT ? OFFSET ?", [limit, offset]);
    return rows as Book[];
  }

  static async getBookById(id: number): Promise<Book | null> {
    const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [id]);
    const books = rows as Book[];
    return books.length > 0 ? books[0] : null;
  }

  static async addBook(title: string, author: string, quantity: number): Promise<Book> {
    const [result] = await db.query(
      "INSERT INTO books (title, author, quantity) VALUES (?, ?, ?)",
      [title, author, quantity]
    );
    return { id: (result as ResultSetHeader).insertId, title, author, quantity };
  }

  static async updateBook(id: number, title: string, author: string, quantity: number): Promise<void> {
    await db.query("UPDATE books SET title = ?, author = ?, quantity = ? WHERE id = ?", [title, author, quantity, id]);
  }

  static async deleteBook(id: number): Promise<void> {
    await db.query("DELETE FROM books WHERE id = ?", [id]);
  }
}
