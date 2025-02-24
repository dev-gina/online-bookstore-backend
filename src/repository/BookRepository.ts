import { Book } from "../model/Book";

const books: Book[] = [
  { id: 1, title: "이진아 타입스크립트", author: "이진아", quantity: 10 },
  { id: 2, title: "RGT 실전 가이드", author: "RGT", quantity: 5 },
  { id: 3, title: "면접 마스터하기", author: "이지나", quantity: 8 }
];

export default {
  getAll: () => books,
  getById: (id: number) => books.find((b) => b.id === id),
  add: (book: Book) => {
    book.id = books.length + 1;
    books.push(book);
    return book;
  },
  update: (id: number, updatedBook: Partial<Book>) => {
    const book = books.find((b) => b.id === id);
    if (!book) return null;
    Object.assign(book, updatedBook);
    return book;
  },
  delete: (id: number) => {
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) return null;
    books.splice(index, 1);
    return true;
  }
};
