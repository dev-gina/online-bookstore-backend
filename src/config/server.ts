import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
const PORT = process.env.PORT || 5001;

// CORS 설정
app.use(
  cors({
    origin: ["http://localhost:3000", "https://deluxe-pastelito-f5b62a.netlify.app"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost", 
  user: process.env.DB_USER || "root", 
  password: process.env.DB_PASSWORD || "12345", 
  database: process.env.DB_NAME || "bookstore", 
});

app.get("/api/test", (req, res) => {
  res.send("테스트 엔드포인트 확인");
});

app.get("/api/books", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM books");
    res.json(rows);
  } catch (error) {
    console.error("책 목록 불러오기 실패:", error);
    res.status(500).json({ message: "책 목록을 불러올 수 없습니다." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
