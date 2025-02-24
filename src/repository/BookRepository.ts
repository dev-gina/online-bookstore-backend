import { ResultSetHeader } from "mysql2";
import db from "../config/database";

export class BookRepository {
  static async getAllBooks() {
    const [rows] = await db.query("SELECT * FROM books");
    return rows;
  }

  static async getBookById(id: number) {
    const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [id]);
    return (rows as any[])[0] || null;
  }

  static async addBook(title: string, author: string, quantity: number) {
    const [result] = await db.query(
      "INSERT INTO books (title, author, quantity) VALUES (?, ?, ?)",
      [title, author, quantity]
    );
    return { id: (result as ResultSetHeader).insertId, title, author, quantity };
  }

  static async updateBook(id: number, title: string, author: string, quantity: number) {
    await db.query(
      "UPDATE books SET title = ?, author = ?, quantity = ? WHERE id = ?",
      [title, author, quantity, id]
    );
  }

  static async deleteBook(id: number) {
    await db.query("DELETE FROM books WHERE id = ?", [id]);
  }
}
