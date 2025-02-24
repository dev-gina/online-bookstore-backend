// testServer.ts
import express from "express";

const app = express();
const PORT = 5001;

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send("Test endpoint works!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
