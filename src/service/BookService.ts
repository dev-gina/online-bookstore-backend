import { BookRepository } from "../repository/BookRepository";

export class BookService {
  static async getAllBooks(page: number = 1, limit: number = 10) {
    return await BookRepository.getAllBooks(page, limit);
  }

  static async getBookById(id: number) {
    return await BookRepository.getBookById(id);
  }

  static async addBook(title: string, author: string, quantity: number) {
    return await BookRepository.addBook(title, author, quantity);
  }

  static async updateBook(id: number, title: string, author: string, quantity: number) {
    return await BookRepository.updateBook(id, title, author, quantity);
  }

  static async deleteBook(id: number) {
    return await BookRepository.deleteBook(id);
  }
}
