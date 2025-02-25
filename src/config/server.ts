  import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import booksRouter from "../routes/bookRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS 설정 
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://online-bookstore-frontend-gina.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,  
  })
);

app.use(express.json());

// 라우트 설정
app.use("/api/books", booksRouter);

app.options("*", cors());

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
