import express from "express";
import { BookController } from "../controller/BookController";

const router = express.Router();

router.get("/books", BookController.getAllBooks); // 책 목록 조회
router.get("/books/:id", BookController.getBookById); // 책 상세 조회
router.post("/books", BookController.addBook); // 책 추가
router.put("/books/:id", BookController.updateBook); // 책 정보 수정
router.delete("/books/:id", BookController.deleteBook); // 책 삭제

export default router;
