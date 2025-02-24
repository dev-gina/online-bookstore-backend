"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookController_1 = __importDefault(require("../controller/BookController"));
const router = express_1.default.Router();
router.get("/", BookController_1.default.getAllBooks);
router.get("/:id", BookController_1.default.getBookById);
router.post("/", BookController_1.default.addBook);
router.put("/:id", BookController_1.default.updateBook);
router.delete("/:id", BookController_1.default.deleteBook);
exports.default = router;
