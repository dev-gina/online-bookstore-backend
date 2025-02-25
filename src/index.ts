import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// 테스트 엔드포인트 추가
app.get("/api/test", (req, res) => {
  res.send("Test endpoint works!");
});

// API 라우트 등록
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
