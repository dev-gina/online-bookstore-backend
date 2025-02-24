import express from "express";
import BookController from "../controller/BookController";

const router = express.Router();

router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getBookById);
router.post("/", BookController.addBook);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export default router;
