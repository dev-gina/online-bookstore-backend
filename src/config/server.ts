import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from "../routes/bookRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 

app.use("/api/books", bookRoutes); 

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});

export default app;