const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "arthurnonaka.mysql.database.azure.com",
  user: "batata",
  password: "potato#123",
  database: "beautyflowdata",
});

module.exports = { db };