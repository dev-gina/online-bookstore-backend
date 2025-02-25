import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { parse } from "url"; 

dotenv.config();

const databaseUrl = process.env.DATABASE_URL
  ? parse(process.env.DATABASE_URL)
  : null;

  const db = mysql.createPool({
    host: databaseUrl?.hostname || process.env.DB_HOST || "localhost", 
    user: databaseUrl?.auth?.split(":")[0] || process.env.DB_USER || "root",
    password: databaseUrl?.auth?.split(":")[1] || process.env.DB_PASSWORD || "12345",
    database: databaseUrl?.pathname?.slice(1) || process.env.DB_NAME || "books",
    port: Number(databaseUrl?.port) || 3306, 
  });  
  

export default db;
