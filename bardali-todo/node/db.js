import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "todo",
});

db.connect(() => {
    console.log("conneced to database");
});

export default db;