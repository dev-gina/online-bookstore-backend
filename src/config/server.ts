import express from "express";

const app = express();
const PORT = process.env.PORT || 5001; 

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send("테스트 엔드포인트 확인");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
