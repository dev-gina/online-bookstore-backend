"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookController_1 = require("../controller/BookController");
const router = express_1.default.Router();
router.get("/books", BookController_1.BookController.getAllBooks); // 책 목록 조회
router.get("/books/:id", BookController_1.BookController.getBookById); // 책 상세 조회
router.post("/books", BookController_1.BookController.addBook); // 책 추가
router.put("/books/:id", BookController_1.BookController.updateBook); // 책 정보 수정
router.delete("/books/:id", BookController_1.BookController.deleteBook); // 책 삭제
exports.default = router;
