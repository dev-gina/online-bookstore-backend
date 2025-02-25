"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const url_1 = require("url");
dotenv_1.default.config();
let dbConfig;
if (process.env.DATABASE_URL) {
    const databaseUrl = new url_1.URL(process.env.DATABASE_URL);
    dbConfig = {
        host: databaseUrl.hostname,
        user: databaseUrl.username,
        password: databaseUrl.password,
        database: databaseUrl.pathname.substring(1),
        port: Number(databaseUrl.port) || 3306,
        ssl: {
            rejectUnauthorized: true, // SSL이 필요한 경우
        },
    };
}
else {
    dbConfig = {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "12345",
        database: process.env.DB_NAME || "books",
        port: 3306,
    };
}
const db = promise_1.default.createPool(dbConfig);
exports.default = db;
