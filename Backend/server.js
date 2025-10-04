const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "bususer",
    password: "buspassword",
    database: "bus_booking"
});


db.connect(err => {
    if (err) throw err;
    console.log("✅ MySQL Connected...");
});

// API endpoint to fetch buses
app.get("/buses", (req, res) => {
    const sql = "SELECT * FROM buses";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log("🚀 Server running at http://localhost:5000");
});
