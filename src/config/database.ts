import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { URL } from "url"; 

dotenv.config();

let dbConfig;

if (process.env.DATABASE_URL) {
  const databaseUrl = new URL(process.env.DATABASE_URL);
  
  dbConfig = {
    host: databaseUrl.hostname,
    user: databaseUrl.username,
    password: databaseUrl.password,
    database: databaseUrl.pathname.substring(1),
    port: Number(databaseUrl.port) || 3306,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "12345",
    database: process.env.DB_NAME || "books",
    port: 3306,
  };
}

const db = mysql.createPool(dbConfig);

export default db;
