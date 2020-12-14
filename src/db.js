const Pool = require("pg").Pool;

const Pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "Accounts"
});

module.exports = pool;