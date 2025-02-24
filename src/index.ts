import app from "./config/server";

const PORT = process.env.PORT || 5000;

// 기본 경로 추가
app.get("/", (req, res) => {
  res.send("📚 온라인 서점 API가 실행 중입니다!");
});

app.listen(PORT, () => {
  console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중`);
});
