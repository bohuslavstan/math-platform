import dotenv from "dotenv";
dotenv.config();
import express from "express";
import pg from "pg";

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(result.rows);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
