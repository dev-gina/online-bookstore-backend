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

// DB 연결
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost", 
  user: process.env.DB_USER || "root", 
  password: process.env.DB_PASSWORD || "12345", 
  database: process.env.DB_NAME || "bookstore", 
});

// 테스트 엔드포인트
app.get("/api/test", (req, res) => {
  res.send("테스트 엔드포인트 확인");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
