import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes"; 

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/api", bookRoutes);  

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
