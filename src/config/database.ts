import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',  
  user: process.env.DB_USER || 'root',    
  password: process.env.DB_PASSWORD || '12345', 
  database: process.env.DB_NAME || 'books',  
  uri: process.env.DATABASE_URL,
});

export default db;
