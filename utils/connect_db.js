

const mysql = require('mysql2');

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'englishforfun_db',
});


