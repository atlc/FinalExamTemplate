import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import config from "./config";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

const app = express();

if (isDevelopment) {
    app.use(cors());
}

if (isProduction) {
    app.use(express.static("public"));
}

// all our api routes
app.get("/api/hello", async (req, res) => {
    try {
        const pool = mysql.createPool(config.mysql);
        const results = await pool.query("SELECT CURRENT_TIMESTAMP");
        const rows = results[0] as unknown as string[];

        const timestampObj = rows[0] as unknown as { CURRENT_TIMESTAMP: string };
        const timestamp = timestampObj.CURRENT_TIMESTAMP;

        res.json({ message: "World from " + timestamp, rows });
    } catch (error) {
        res.json({ message: "World (db broke lol)" });
    }
});

// 404 fallback for client side routing
if (isProduction) {
    app.get("*", (req, res) => {
        res.sendFile("index.html", { root: "public" });
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
