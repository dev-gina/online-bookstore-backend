import BookRepository from "../repository/BookRepository";
import { Book } from "../model/Book";

export default {
  getAllBooks: () => BookRepository.getAll(),
  getBookById: (id: number) => BookRepository.getById(id),
  addBook: (book: Omit<Book, "id">) => BookRepository.add({ ...book, id: 0 }),
  updateBook: (id: number, book: Partial<Book>) => BookRepository.update(id, book),
  deleteBook: (id: number) => BookRepository.delete(id)
};
