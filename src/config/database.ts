import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345", 
  database: "bookstore",
});

export default db;
